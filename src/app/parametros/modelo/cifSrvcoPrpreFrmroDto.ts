/**
 * cifweb-backend API
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 0.0.1-SNAPSHOT
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
import { CanalConteudoDto } from './canalConteudoDto';
import { ClassificacaoCndoDto } from './classificacaoCndoDto';
import { DetalheDebitoCndoDto } from './detalheDebitoCndoDto';
import { FncneEspecialCndoDto } from './fncneEspecialCndoDto';
import { PrioridadeConteudoDto } from './prioridadeConteudoDto';
import { PrpreFrmroSnlSaldoDto } from './prpreFrmroSnlSaldoDto';
import { SaldoRsrvaSclCndoDto } from './saldoRsrvaSclCndoDto';
import { SistemaConteudoDto } from './sistemaConteudoDto';
import { TipoConteudoDto } from './tipoConteudoDto';
import { TipoExtracaoCndoDto } from './tipoExtracaoCndoDto';
import { TipoPrpreFrmroDto } from './tipoPrpreFrmroDto';

export interface CifSrvcoPrpreFrmroDto { 
    tipoPrpreFrmro?: TipoPrpreFrmroDto;
    tipoConteudo?: TipoConteudoDto;
    icObrigatorio?: string;
    icHabilitado?: string;
    inicioVigencia?: string;
    fimVigencia?: string;
    coUsuario?: string;
    sistemaConteudos?: Array<SistemaConteudoDto>;
    canalConteudos?: Array<CanalConteudoDto>;
    saldoRsrvaSclCndos?: Array<SaldoRsrvaSclCndoDto>;
    detalheDebitoCndos?: Array<DetalheDebitoCndoDto>;
    fncneEspecialCndos?: Array<FncneEspecialCndoDto>;
    prpreFrmroSnlSaldos?: Array<PrpreFrmroSnlSaldoDto>;
    tipoExtracaoCndos?: Array<TipoExtracaoCndoDto>;
    classificacaoCndos?: Array<ClassificacaoCndoDto>;
    prioridadeConteudos?: Array<PrioridadeConteudoDto>;
}