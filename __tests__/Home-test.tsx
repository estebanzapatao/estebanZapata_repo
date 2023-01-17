import axios from 'axios';
import { render, screen, waitFor, fireEvent } from '@testing-library/react-native';

import { getPokemonList } from "../src/api/index";
import Home from "../src/screens/Home"
import { mockupList } from "../src/mockups/mockups"

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe("<Home/>", () => {

    afterEach(() => {
        jest.resetAllMocks();
    });

    it("get pokemon list", async () => {
        mockedAxios.get.mockResolvedValue({
            data: mockupList,
            status: 200,
            statusText: 'OK',
            headers: {},
            config: {},
        });

        render(<Home />);
        await waitFor(() => {
            expect(axios.get).toHaveBeenCalledTimes(1);
            expect(mockedAxios.get).toHaveBeenCalled();
        });

        const data = await getPokemonList(0);
        expect(data).toEqual(mockupList.results);
    });

    it("find title", () => {
        render(<Home />)
        screen.getByText("Listado de Pokemon")
    })

    it("render input search ", () => {
        render(<Home />)
        const input = screen.getByTestId("inputSearchName")
        expect(input.props["placeholder"]).toBe("Buscar")

        fireEvent.changeText(input, "123");
        expect(input.props.value).toBe("123")
    })
});