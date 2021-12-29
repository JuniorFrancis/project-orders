import AbstractService from "services/AbstractService";

class OrderService extends AbstractService {

    getAllOrders() {
        return this.get("orders/", {});
    }

    create(data) {
        return this.post("create/", data);
    }

}

export default new OrderService();
