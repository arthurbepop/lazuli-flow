import { fireEvent, render, screen } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { MemoryRouter } from "react-router-dom";
import ContactFormSection from "@/components/ContactFormSection";
import Index from "@/pages/Index";
import { WHATSAPP_URL } from "@/lib/constants";

describe("Index page", () => {
  it("renders the main conversion sections", () => {
    render(
      <MemoryRouter>
        <Index />
      </MemoryRouter>,
    );

    expect(
      screen.getByRole("heading", {
        name: /movimento que transforma\..*equil.brio que inspira\./i,
      }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: /vamos conversar sobre seus objetivos/i }),
    ).toBeInTheDocument();
    expect(screen.getAllByText(/@pilateslazuli/i).length).toBeGreaterThan(0);
  });
});

describe("ContactFormSection", () => {
  const openSpy = vi.spyOn(window, "open").mockImplementation(() => null);

  beforeEach(() => {
    openSpy.mockClear();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it("opens WhatsApp with an encoded message and resets the form", () => {
    render(<ContactFormSection />);

    fireEvent.change(screen.getByLabelText(/^nome$/i), {
      target: { value: "Ana" },
    });
    fireEvent.change(screen.getByLabelText(/^e-mail$/i), {
      target: { value: "ana@email.com" },
    });
    fireEvent.change(screen.getByLabelText(/^telefone$/i), {
      target: { value: "(51) 99999-9999" },
    });
    fireEvent.change(screen.getByLabelText(/^mensagem$/i), {
      target: { value: "Quero agendar uma aula." },
    });

    fireEvent.click(screen.getByRole("button", { name: /enviar mensagem/i }));

    expect(openSpy).toHaveBeenCalledTimes(1);
    expect(openSpy).toHaveBeenCalledWith(
      `${WHATSAPP_URL}?text=${encodeURIComponent(
        [
          "Nome: Ana",
          "E-mail: ana@email.com",
          "Telefone: (51) 99999-9999",
          "Mensagem: Quero agendar uma aula.",
        ].join("\n"),
      )}`,
      "_blank",
      "noopener,noreferrer",
    );

    expect(screen.getByLabelText(/^nome$/i)).toHaveValue("");
    expect(screen.getByLabelText(/^e-mail$/i)).toHaveValue("");
    expect(screen.getByLabelText(/^telefone$/i)).toHaveValue("");
    expect(screen.getByLabelText(/^mensagem$/i)).toHaveValue("");

    expect(
      screen.getByText(/mensagem enviada\..*whatsapp para voc./i),
    ).toBeInTheDocument();
  });
});
