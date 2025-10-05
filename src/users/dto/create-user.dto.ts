import { ApiProperty } from "@nestjs/swagger";


export class CreateUserDto {

    @ApiProperty({required:true,example:'usuario@empresa.com'})
    email:string;

    @ApiProperty({required:true,example:'jonh doe'})
    name:string;

    username?:string;

    @ApiProperty({required:true,example:'password123'})
    Password:string;

    @ApiProperty({required:true,example:'849566865'})
    telephone:string;

    @ApiProperty({required:true,example:1,description:'ID del tenant'})
    tenantid:number
}
