import Mock from "mockjs";

const List = [];
const count = 15;

for (let i = 0; i < count; i++) {
  List.push(
    Mock.mock({
      id: "@increment",
      created_on: +Mock.Random.date("T"),
      name: "@title(5, 10)",
      amount: "@integer(0, 5000)",
      bank: "DE-01-0000-2233-33222-10"
    })
  );
}

export default [
  {
    url: "/invoice/list",
    type: "get",
    response: config => {
      const { name, page = 1, limit = 5, sort } = config.query;

      let mockList = List.filter(item => {
        if (name && item.name.indexOf(name) < 0) return false;
        return true;
      });

      if (sort === "-id") {
        mockList = mockList.reverse();
      }

      const pageList = mockList.filter(
        (item, index) => index < limit * page && index >= limit * (page - 1)
      );

      return {
        code: 20000,
        data: {
          total: mockList.length,
          items: pageList
        }
      };
    }
  },

  {
    url: "/invoice/detail",
    type: "get",
    response: config => {
      const { id } = config.query;
      for (const invoice of List) {
        if (invoice.id === +id) {
          return {
            code: 20000,
            data: invoice
          };
        }
      }
    }
  },
  {
    url: "/invoice/create",
    type: "post",
    response: _ => {
      return {
        code: 20000,
        data: "success"
      };
    }
  },
  {
    url: "/invoice/update",
    type: "post",
    response: _ => {
      return {
        code: 20000,
        data: "success"
      };
    }
  },
  {
    url: "/invoice/delete",
    type: "delete",
    response: _ => {
      return {
        code: 20000,
        data: "success"
      };
    }
  },
];
