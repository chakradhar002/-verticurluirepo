import { Controller, Get } from "@nestjs/common";

@Controller('/api')//decoraters
export class MyController{

    @Get('/message')
    getMessage():string{
     let message = "hi how r you";  //this is 
     return message;
    }
   
}



