
import React from 'react';
import { Toolbar } from 'primereact/toolbar';
import { Button } from 'primereact/button';
// import { SplitButton } from 'primereact/splitbutton';
import { InputText } from 'primereact/inputtext';
import { IconField } from 'primereact/iconfield';
import { InputIcon } from 'primereact/inputicon';

const MyToolBar = () => {
    // const items = [
    //     {
    //         label: 'Update',
    //         icon: 'pi pi-refresh'
    //     },
    //     {
    //         label: 'Delete',
    //         icon: 'pi pi-times'
    //     }
    // ];

    const startContent = (
        <React.Fragment>
            {/* <Button icon="pi pi-print" className="mr-4" />
            &nbsp; */}
            <Button icon="pi pi-upload" className='ml-2' />
        </React.Fragment>
    );

    const centerContent = (
        <IconField iconPosition="left">
            <InputIcon className="pi pi-search" />
            <InputText placeholder="Поиск" />
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