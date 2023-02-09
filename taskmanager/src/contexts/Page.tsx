import { createContext, useContext, useState } from "react";

export enum Page {

    Tasks = 'Tasks',
    Authors = 'Authors'
}

type ContextType = {

    page: Page;
    setPage: (page: Page) => void
}

type Props = {
    children?: React.ReactNode
  };

const Context = createContext<ContextType>({
    page: Page.Tasks,
    setPage:  (page: Page) => console.warn('no page provider'),
});

export const usePage = () => useContext(Context);

export const PageStore: React.FC<Props> = ({ children }) => {

    const [page, setPage] = useState(Page.Tasks);
    return(

        <Context.Provider value={{page, setPage}}>{ children }</Context.Provider>
    )

}