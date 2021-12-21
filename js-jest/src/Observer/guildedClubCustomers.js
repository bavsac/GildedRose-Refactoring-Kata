class GuildedClub  {
    constructor(){
        this.customers = [], 
    }

    addCustomer(customer){
        this.customers.push(customer)
    }

    removeCustomer(customer){
        const removeCutomerIndex = this.customers.findIndex(cust => {
            return customer === cust;
          });
      
          if (removeCutomerIndex !== -1) {
            this.customers = this.customers.slice(removeIndex, 1);
          }
    }

    notify(data) {
        if (this.customers.length > 0) {
          this.customers.forEach(customer => customer.update(data));
        }
      }

}

module.exports = GuildedClub;