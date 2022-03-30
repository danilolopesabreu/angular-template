import { CifServicoIdDto } from './cifServicoIdDto';
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

export class CifComplementoDtoId { 
    nuAcaoVinculador?: number;
    nuModoVinculador?: number;
    nuGrupoVinculador?: number;
    nuSqnclCifSrvcoVinculador?: number;

    public static of(cifServicoIdDto: CifServicoIdDto):CifComplementoDtoId { 
        let retorno = new CifComplementoDtoId();
        retorno.nuAcaoVinculador = cifServicoIdDto.nuAcao;
        retorno.nuModoVinculador = cifServicoIdDto.nuModo;
        retorno.nuGrupoVinculador = cifServicoIdDto.nuGrupo;
        retorno.nuSqnclCifSrvcoVinculador = cifServicoIdDto.nuSequencialCifServico;
        return retorno;
    }
}