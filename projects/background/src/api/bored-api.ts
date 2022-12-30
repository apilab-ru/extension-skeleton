import { Bored } from "./bored.interface";
import { from, Observable } from "rxjs";

class BoredApi {

  fetchBored(minParticipants: number, maxParticipants: number): Observable<Bored> {
    const url = `http://www.boredapi.com/api/activity?minparticipants=${minParticipants}&maxparticipants=${maxParticipants}`;
    return from(fetch(url).then(res => res.json()));
  }

}

export const boredApi = new BoredApi();
