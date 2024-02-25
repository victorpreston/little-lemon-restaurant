import { fireEvent, render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Reservations from "./Reservations";

describe("Reservations page", () => {
  const timeFormat = /^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/;

  test("should have one or more available reservation time options", async () => {
    render(
      <MemoryRouter>
        <Reservations />
      </MemoryRouter>
    );

    const timeOptions = await screen.findAllByTestId("reservation-time-option");

    expect(timeOptions.length).toBeGreaterThanOrEqual(1);
    timeOptions.forEach((timeOption) =>
      expect(timeOption.value).toMatch(timeFormat)
    );
  });

  test("should update available reservation time options when changing reservation date", async () => {
    render(
      <MemoryRouter>
        <Reservations />
      </MemoryRouter>
    );

    const reservationDate = "2023-12-01";
    const dateInput = screen.getByLabelText(/Date/);
    const initialTimeOptions = await screen.findAllByTestId(
      "reservation-time-option"
    );
    fireEvent.change(dateInput, { target: { value: reservationDate } });
    fireEvent.blur(dateInput);
    const updatedTimeOptions = await screen.findAllByTestId(
      "reservation-time-option"
    );

    expect(dateInput).toHaveValue(reservationDate);
    initialTimeOptions.forEach((timeOption) =>
      expect(timeOption.value).toMatch(timeFormat)
    );
    updatedTimeOptions.forEach((timeOption) =>
      expect(timeOption.value).toMatch(timeFormat)
    );
    expect(initialTimeOptions.length).not.toBe(updatedTimeOptions.length);
  });
});
