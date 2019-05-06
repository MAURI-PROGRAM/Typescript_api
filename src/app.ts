import express,{ Application } from 'express';

export class App{
    private app:Application


    constructor(private port: number|string){
        this.app = express();
    }

    settings(){
        
    }

    async listen(){
        await this.app.listen();
        console.log('server on porto',3000)
    }

}