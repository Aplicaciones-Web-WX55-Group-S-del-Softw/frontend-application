import http from "../../shared/service/http-common.js";

export class AnimalsApiService{
    getAll(){
        return http.get('/animals');
    }
    getById(id){
        return http.get('animals/${id}');
    }
    create(tutorialResource){
        return http.post('/animals', tutorialResource);
    }
    update(id, tutorialResource){
        return http.put('animals/${id}', tutorialResource);
    }
    delete(id){
        return http.delete('animals/${id}');
    }
    findByTitle(title){
        return http.get('animals?title=${title}');
    }
}
