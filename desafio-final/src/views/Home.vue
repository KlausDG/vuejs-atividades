<template>
  <div>
    <div class="divTable blueTable">
      <div class="divTableBody" v-for="i in total -1" :key="i">
        <div class="divTableRow">
          <div class="divTableCell">
              <router-link :to="`/item/${posts[i].ID}/${posts[i].slug}/?category=${posts[i].categories['Sem categoria'].name}`">{{posts[i].title}}</router-link>
              <br /><br />
              {{posts[i].date}}
              <strong> em </strong> {{posts[i].categories['Sem categoria'].name}}
              <br /><br />
              <div v-html="posts[i].excerpt"></div>
              <br /><br />
              <strong>por </strong> {{posts[i].author.name}}
          </div>
        </div>
      </div>
    </div>
    <button @click="showMore()">Carregar Mais</button>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      total: 5
    };
  },
  props:['posts'],

  methods: {
    showMore(){
      this.total += 5
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