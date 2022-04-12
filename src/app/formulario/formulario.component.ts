import { CifComplementoDto } from './../parametros/modelo/cifComplementoDto';
import { CifServicoDto } from './../parametros/modelo/cifServicoDto';
import { Component, OnInit } from '@angular/core';
import { CifServicoService } from 'app/parametros/service/cifServico.service';
import { TREE_ACTIONS, KEYS, IActionMapping, ITreeOptions } from '@circlon/angular-tree-component';

declare var $:any;

export class TreeNode {
  cifComplementoDto: CifComplementoDto;
  children:TreeNode[];
  expanded: false;

  get name():string {
    return this.cifComplementoDto.cifServicoVinculado.noServico;
  }

  get id():number{
    return this.cifComplementoDto.cifServicoVinculado.id.nuSequencialCifServico;
  }
}

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  listaDeservicosPrincipais: Array<CifServicoDto>;
  servicoPrincipalSelecionado: CifServicoDto;
  servicoPrincipalEComplementos: CifServicoDto;
  
  nodes = [];

  options: ITreeOptions = {
    actionMapping: {
      mouse: {
        click: (tree, node, $event) => {
          if (node.hasChildren) {
            TREE_ACTIONS.TOGGLE_EXPANDED(tree, node, $event);
          } 
          let treeNodeSelecionado:TreeNode = node.data;
          this.montarPropriedadesDoParametroCifServicoSelecionado(treeNodeSelecionado.cifComplementoDto.cifServicoVinculado);
        }
      }
    }
  };

  // defined the array of data
  public data: { [key: string]: Object }[] = this.nodes;

  //binding data source through fields property
  public fields:Object;

  constructor(private cifServicoService:CifServicoService) { }

  montarPropriedadesDoParametroCifServicoSelecionado(cifServicoDto:CifServicoDto){
    console.log(cifServicoDto);
  }

  carregarServicosPrincipais() {
    this.cifServicoService.getCifServicoPrinciais()
      .subscribe(cifServicos => {
        this.listaDeservicosPrincipais = [...cifServicos];
        this.construirDropDown();
      });
  }

  carregarComplementos(){ 
    this.cifServicoService.getComplementosCifServico(this.servicoPrincipalSelecionado.id).subscribe(cifServico => {
      this.servicoPrincipalEComplementos = cifServico;
      
      let rootTreeNode = new TreeNode();
      rootTreeNode.cifComplementoDto = CifComplementoDto.of(cifServico);
      rootTreeNode.children = [];
      this.montarArvoreCifServicoComplementos(rootTreeNode.cifComplementoDto, rootTreeNode.children);
      this.nodes = [ this.ordenarArvore(rootTreeNode) ];
      
      this.nodes[0].expanded = true;

      this.fields = { dataSource: this.nodes, value: 'cifComplementoDto.cifServicoVinculado.id.nuSequencialCifServico', text: 'cifComplementoDto.cifServicoVinculado.noServico', child: 'children' };
    });
  }

  montarArvoreCifServicoComplementos(complemento: CifComplementoDto, children: TreeNode[]) {
    complemento.cifServicoVinculado.complementos.forEach(umComplemento => {
      let treeNode = new TreeNode();
      treeNode.cifComplementoDto = umComplemento;
      treeNode.children = [];
      children.push(treeNode);
      this.montarArvoreCifServicoComplementos(umComplemento, treeNode.children);
    });
  }

  // ordena a arvore de acordo com o CifCOmplementoDto.cifServicoVinculado.noServico 
  ordenarArvore(node: TreeNode): TreeNode { 
    node.children.sort((a, b) => {
      if (a.cifComplementoDto.cifServicoVinculado.noServico < b.cifComplementoDto.cifServicoVinculado.noServico) {
        return -1;
      }
      if (a.cifComplementoDto.cifServicoVinculado.noServico > b.cifComplementoDto.cifServicoVinculado.noServico) {
        return 1;
      }
      return 0;
    });
    node.children.forEach(child => {
      this.ordenarArvore(child);
    });
    return node;
  }

  selecionarElementoArvore(){
    console.log(this.nodes);
  }

  ngOnInit(): void {  
    this.carregarServicosPrincipais();
  }

  construirDropDown(){
    if ($(".selectpicker").length != 0) {
      setTimeout(function () {
         $('.selectpicker').selectpicker('refresh');
        }, 1000);
    }
  }


    

}
