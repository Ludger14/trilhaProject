import { Pipe, PipeTransform } from '@angular/core';
import Usuario from "../model/usuario.model";

@Pipe({
    name: 'userFilter'
})
export class UserFilterPipe implements PipeTransform{
    transform(usuario: Usuario[], busca: string): Usuario[]{
        if (!usuario || !busca) {
            return usuario;
        }
        return usuario.filter(user => user.nome.toLowerCase().indexOf(busca.toLowerCase()) !== -1);
    }
}