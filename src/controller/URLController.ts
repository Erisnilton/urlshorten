import { Request, Response } from "express";
import shortid from "shortid";
import { constrants as config } from "../config/constrants";

export class URLController {
  public async shorten(req: Request, res: Response): Promise<void> {
    // Ver se a URL já existe
    // Criar o hash para essa URL
    console.log(req.body);
    const { originURL } = req.body;
    const hash = shortid.generate();
    const shorturl = `${config.API_URL}/${hash}`;

    // Salvar a URL no banco
    // retornar a URL
    res.send({ originURL, hash, shorturl });
  }
}
