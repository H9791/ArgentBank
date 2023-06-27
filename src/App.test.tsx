import { describe, it, expect } from "vitest";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";

describe("something truthy or falsy", () => {
    it("true to be true", () => {
        expect(true).toBeTruthy();
    });

    it("true to be true", () => {
        expect(false).toBeFalsy();
    });
});
