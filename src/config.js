API_URL = null;

if (process.env.NODE_ENV === "development") {
  API_URL = "http://127.0.0.1:8000";
} else if (process.env.NODE_ENV === "production") {
  API_URL = "http://209.38.93.77:8000";
}
module.exports = {
  API_URL,
  INTERFACE_API_KEY:
    "UNIHACK-UF4lN4R5ATOl73DrOaoOqB0E9HoefL9lfIGBw50naUDKIKSL8Afl57WIZA5tGEEtBiDm3ixHnKHGiNCkMYEfRBZvLVQ9NDPcXmgNlQawSCEG9pontG4dyfPGidhht30u",
};
