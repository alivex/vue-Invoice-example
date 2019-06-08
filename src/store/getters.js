const getters = {
  device: state => state.app.device,
  dialogOpen: state => state.app.dialogOpen,
  dialogStatus: state => state.app.dialogStatus,
  temp: state => state.invoice.temp,
  refresh: state => state.invoice.refresh
};
export default getters;
