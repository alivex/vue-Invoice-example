import request from "@/utils/request";

export function fetchList(query) {
  return request({
    url: "/invoice/list",
    method: "get",
    params: query
  });
}

export function fetchInvoice(id) {
  return request({
    url: "/invoice/detail",
    method: "get",
    params: { id }
  });
}

export function createInvoice(data) {
  return request({
    url: "/invoice/create",
    method: "post",
    data
  });
}

export function updateInvoice(data) {
  return request({
    url: "/invoice/update",
    method: "post",
    data
  });
}

export function deleteInvoice(id) {
  return request({
    url: "/invoice/delete",
    method: "delete",
    params: { id }
  });
}
