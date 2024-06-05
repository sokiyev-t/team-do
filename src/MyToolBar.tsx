
import React from 'react';
import { Toolbar } from 'primereact/toolbar';
import { InputText } from 'primereact/inputtext';
import { IconField } from 'primereact/iconfield';
import { InputIcon } from 'primereact/inputicon';

interface MyToolBarProps {
    searchText: (text: string) => void;
}

const MyToolBar: React.FC<MyToolBarProps> = ({ searchText }) => {
    const startContent = (
        <React.Fragment>
        </React.Fragment>
    );
    const centerContent = (
        <IconField iconPosition="left">
            <InputIcon className="pi pi-search" />
            <InputText onChange={(e) => searchText(e.target.value)} placeholder="Поиск" />
        </IconField>
    );
    const endContent = (
        <React.Fragment>

        </React.Fragment>
    );
    return (
        <div className="card">
            <Toolbar start={startContent} center={centerContent} end={endContent} />
        </div>
    );
}

export default MyToolBar;