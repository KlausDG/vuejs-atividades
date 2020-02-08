<template>
  <div>
    <div class="divTable blueTable">
      <div class="divTableBody">
        <div class="divTableRow">
          <div class="divTableCell" v-for="item in finditem()" :key="item.ID">
            <h1>{{item.title}}</h1>
            <br />
            <br />
            {{item.date}}
            <strong>em</strong>
            {{item.categories['Sem categoria'].name}}
            <br />
            <br />
            <div v-html="item.content"></div>
            <br />
            <br />
            <strong>por</strong>
            {{item.author.name}}
          <button @click="$emit('select-event', item.ID)">Lido</button>
          </div>
        </div>
      </div>
    </div>
    <div class="divTable blueTable">
      <div class="divTableBody" v-for="link in findCategory()" :key="link">
        <div class="divTableRow">
          <div class="divTableCell">
            <router-link :to="`/item/${link.ID}/${link.slug}/?category=${link.categories['Sem categoria'].name}`">{{link.title}}</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Item",
  props: ["posts"],
  data() {
    return {
    };
  },
  methods: {
    finditem() {
      return this.posts.filter(item => {
        return item.ID == this.$route.params.id;
      });
    },
    findCategory() {
      return this.posts.filter(item => {
        return item.categories['Sem categoria'].name == this.$route.query.category
      })
    }
  },
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