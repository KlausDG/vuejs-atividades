<template>
  <div>
    <div>
      <button @click="swapDiscount">CUPOM</button>
    </div>
    <div class="divTable blueTable">
      <div class="divTableHeading">
        <div class="divTableRow">
          <div class="divTableHead">Name</div>
          <div class="divTableHead">Price</div>
          <div class="divTableHead">Discout</div>
          <div class="divTableHead">Id</div>
          <div class="divTableHead">Image</div>
        </div>
      </div>
      <div></div>
      <div class="divTableBody" v-for="(item, index) in show()" :key="index">
        <div class="divTableRow">
          <div class="divTableCell">{{item.id}}</div>
          <div class="divTableCell">
            <router-link :to="`/item/${item.id}`">{{item.name}}</router-link>
          </div>
          <div class="divTableCell">{{item.price}}</div>
          <div class="divTableCell">{{item.discount}}</div>
          <div class="divTableCell">
            <img :src="item.image" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      discount: false
    };
  },

  methods: {
    show() {
      return this.$parent.items;
    },
    swapDiscount(){
      this.discount = !this.discount
      if (this.discount) {
        this.$parent.items.map(item => {
          item.price -= item.price * (item.discount / 100)
        });
      } else {
        this.$parent.items.map(item => {
          item.price += item.price * (item.discount / 100)
        });
      }
    }
  }
};
</script>


<style scoped>
div.blueTable {
  border: 2px solid #1c6ea4;
  background-color: #eeeeee;
  width: 66%;
  margin: auto;
  text-align: left;
  border-collapse: collapse;
}
.divTable.blueTable .divTableCell,
.divTable.blueTable .divTableHead {
  border: 1px solid #aaaaaa;
  padding: 3px 2px;
}
.divTable.blueTable .divTableBody .divTableCell {
  font-size: 13px;
}
.divTable.blueTable .divTableBody .divTableCell img {
  height: 10%;
  width: 10%;
}
.divTable.blueTable .divTableRow:nth-child(even) {
  background: #d0e4f5;
}
.divTable.blueTable .divTableHeading {
  background: #2798e2;
  background: -moz-linear-gradient(top, #5db2e9 0%, #3ca2e5 66%, #2798e2 100%);
  background: -webkit-linear-gradient(
    top,
    #5db2e9 0%,
    #3ca2e5 66%,
    #2798e2 100%
  );
  background: linear-gradient(to bottom, #5db2e9 0%, #3ca2e5 66%, #2798e2 100%);
  border-bottom: 2px solid #444444;
}
.divTable.blueTable .divTableHeading .divTableHead {
  font-size: 16px;
  font-weight: bold;
  text-align: center;
  color: #ffffff;
  border-left: 2px solid #d0e4f5;
}
.divTable.blueTable .divTableHeading .divTableHead:first-child {
  border-left: none;
}
.blueTable .tableFootStyle {
  font-size: 14px;
}
.blueTable .tableFootStyle .links {
  text-align: right;
}
.blueTable .tableFootStyle .links a {
  display: inline-block;
  background: #1c6ea4;
  color: #ffffff;
  padding: 2px 8px;
  border-radius: 5px;
}
.blueTable.outerTableFooter {
  border-top: none;
}
.blueTable.outerTableFooter .tableFootStyle {
  padding: 3px 5px;
}
/* DivTable.com */
.divTable {
  display: table;
}
.divTableRow {
  display: table-row;
}
.divTableHeading {
  display: table-header-group;
}
.divTableCell,
.divTableHead {
  display: table-cell;
}
.divTableHeading {
  display: table-header-group;
}
.divTableFoot {
  display: table-footer-group;
}
.divTableBody {
  display: table-row-group;
}
</style>