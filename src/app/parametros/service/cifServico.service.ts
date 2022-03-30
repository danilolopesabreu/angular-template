import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpService } from 'app/shared/service/HttpService.service';
import { CifServicoDto } from '../modelo/cifServicoDto';
import { CifServicoIdDto } from '../modelo/cifServicoIdDto';

@Injectable({
  providedIn: 'root'
})
export class CifServicoService {

  constructor(private httpService:HttpService) { }

  public getCifServicoPrinciais(): Observable<Array<CifServicoDto>> {
    return this.httpService.get<Array<CifServicoDto>>("/cif-servico/principais");
  }

  public getComplementosCifServico(cifServicoIdDto:CifServicoIdDto): Observable<CifServicoDto> {
    return this.httpService.post<CifServicoDto>("/cif-servico/complementos", cifServicoIdDto);
  }

}
