import axios from 'axios';


const TABLE_BASE_REST_API_URL='http://localhost:9092/table/getAll'

const TABLE_GET_BY_ID_REST_API_URL='http://localhost:9092/table/get'

const TABLE_POST_REST_API_URL='http://localhost:9092/table/add'

const TABLE_PUT_REST_API_URL='http://localhost:9092/table/edit'

const TABLE_DELETE_REST_API_URL='http://localhost:9092/table/delete'


class TableService{
    getAllData(){
        return axios.get(TABLE_BASE_REST_API_URL)
    }

    addData(table){
        return axios.post(TABLE_POST_REST_API_URL,table)
    }

    getDataById(id){
        return axios.get(TABLE_GET_BY_ID_REST_API_URL+"/"+id);
    }

    updateData(id,table){
        return axios.put(TABLE_PUT_REST_API_URL+"/"+id,table);
        
    }

    deleteData(id){
        return axios.delete(TABLE_DELETE_REST_API_URL+"/"+id);
    }

}

export default new TableService();