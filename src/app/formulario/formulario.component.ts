import { CifComplementoDto } from './../parametros/modelo/cifComplementoDto';
import { CifServicoDto } from './../parametros/modelo/cifServicoDto';
import { Component, OnInit } from '@angular/core';
import { CifServicoService } from 'app/parametros/service/cifServico.service';
import { TREE_ACTIONS, KEYS, IActionMapping, ITreeOptions } from '@circlon/angular-tree-component';

declare var $:any;

export class TreeNode {
  cifComplementoDto: CifComplementoDto;
  children:TreeNode[];

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
          if (node.hasChildren){
            TREE_ACTIONS.TOGGLE_EXPANDED(tree, node, $event);
          }        
          let treeNodeSelecionado:TreeNode = node.data;
          this.montarPropriedadesDoParametroCifServicoSelecionado(treeNodeSelecionado.cifComplementoDto.cifServicoVinculado);
        }
      }
    }
  };

  constructor(private cifServicoService:CifServicoService) { }

  montarPropriedadesDoParametroCifServicoSelecionado(cifServicoDto:CifServicoDto){
    console.log(cifServicoDto);
  }

  carregarServicosPrincipais() {
    this.cifServicoService.getCifServicoPrinciais()
      .subscribe(cifServicos => {
        //this.listaDeservicosPrincipais = JSON.parse(JSON.stringify(cifServicos));
        console.log(cifServicos);
        this.listaDeservicosPrincipais = [...cifServicos];
        this.construirDropDown();
      });
  }

  carregarComplementos(){ 
    console.log(this.servicoPrincipalSelecionado);
    this.cifServicoService.getComplementosCifServico(this.servicoPrincipalSelecionado.id).subscribe(cifServico => {
      //this.servicoPrincipalEComplementos = JSON.parse(JSON.stringify(cifServico));
      this.servicoPrincipalEComplementos = cifServico;
      console.log(cifServico);
      
      let rootTreeNode = new TreeNode();
      rootTreeNode.cifComplementoDto = CifComplementoDto.of(cifServico);
      rootTreeNode.children = [];
      this.montarArvoreCifServicoComplementos(rootTreeNode.cifComplementoDto, rootTreeNode.children);
      this.nodes = [ rootTreeNode ];
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
    return;
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
