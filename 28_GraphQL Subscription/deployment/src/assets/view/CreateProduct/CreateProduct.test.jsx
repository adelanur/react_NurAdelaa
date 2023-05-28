import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { describe, it } from "vitest";
import store from "../../config/store";
import CreateProduct from "./CreateProduct";

describe("CreateProduct.jsx", () => {
  it("ProductName harus menerima sebuah input text dan dapat menampilkannya dihalaman", () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <CreateProduct />
        </Provider>
      </BrowserRouter>
    );
    const ProductName = screen.getByTestId("productName");
    fireEvent.change(ProductName, { target: { value: "hello dunia" } });
    expect(screen.getByDisplayValue("hello dunia")).toBeInTheDocument();
  });

  //   test button
  it("harus menampilkan pesan jika input productName kosong ", async () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <CreateProduct />
        </Provider>
      </BrowserRouter>
    );
    const ProductName = screen.getByTestId("productName");
    const submitbutton = screen.getByTestId("submitbutton");
    fireEvent.change(ProductName, { target: { value: "" } });
    fireEvent.click(submitbutton);
    await waitFor(() => {
      expect(screen.getByText("produk harus diisi")).toBeInTheDocument();
    });
  });
  it("harus menampilkan pesan jika input productName tdak boleh lebih 25 karakter", async () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <CreateProduct />
        </Provider>
      </BrowserRouter>
    );
    const ProductName = screen.getByTestId("productName");
    const submitbutton = screen.getByTestId("submitbutton");
    fireEvent.change(ProductName, {
      target: {
        value:
          "hghytfvhvmbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfdrydrwasrfdcyujbghjbknhvujbjbhyv",
      },
    });
    fireEvent.click(submitbutton);
    await waitFor(() => {
      expect(
        screen.getByText("product name tidak boleh melebihi 25 karakter")
      ).toBeInTheDocument();
    });
  });
  it("harus menampilkan pesan jika input productName tdak boleh lebih 25 karakter", async () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <CreateProduct />
        </Provider>
      </BrowserRouter>
    );
    const ProductName = screen.getByTestId("productName");
    const submitbutton = screen.getByTestId("submitbutton");
    fireEvent.change(ProductName, {
      target: {
        value: "....GYHBU..",
      },
    });
    fireEvent.click(submitbutton);
    await waitFor(() => {
      expect(
        screen.getByText("tidak boleh mengandung simbol")
      ).toBeInTheDocument();
    });
  });
  it("data tidak boleh kosong", async () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <CreateProduct />
        </Provider>
      </BrowserRouter>
    );

    const submitbutton = screen.getByTestId("submitbutton");

    fireEvent.click(submitbutton);
    await waitFor(() => {
      expect(screen.getByText("produk harus diisi")).toBeInTheDocument();
      expect(screen.getByText("Harap pilih")).toBeInTheDocument();
      expect(screen.getByText("foto harus diisi")).toBeInTheDocument();
      expect(screen.getByText("Harap klik salah satu")).toBeInTheDocument();
      expect(screen.getByText("deskripsi harus diisi")).toBeInTheDocument();
      expect(screen.getByText("harus berisi angka")).toBeInTheDocument();
    });
  });
});
