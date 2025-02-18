import ExamplesService from '../../services/examples.service';
import { Request, Response } from 'express';

export class Controller {
  all(req: Request, res: Response): void {
    ExamplesService.all().then(r => res.json(r));
  }

  byId(req: Request, res: Response): void {
    const id = Number.parseInt(req.params['id'])
    ExamplesService.byId(id).then(r => {
      if (r) res.json(r);
      else res.status(404).end();
    });
  }

  create(req: Request, res: Response): void {
    ExamplesService.create(req.body.name).then(r =>
      res
        .status(201)
        .location(`<%= apiRoot %>/examples/${r.id}`)
        .json(r),
    );
  }
}
export default new Controller();
