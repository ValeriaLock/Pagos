import React, { useState } from 'react';
import './profile.scss';
import Form from 'devextreme-react/form';

export default function Profile() {
  const [amount, setAmount] = useState(0);
  const handlePaymentToken = (token) => {
    console.log(token);
    const amountPaid = token.amount;
    setAmount((prevAmount) => prevAmount + amountPaid);
  };
  
  

  const [notes, setNotes] = useState(
    'Sandra is a CPA and has been our controller since 2008. She loves to interact with staff so if you`ve not met her, be certain to say hi.\r\n\r\nSandra has 2 daughters both of whom are accomplished gymnasts.'
  );
  const employee = {
    ID: 7,
    FirstName: 'Sandra',
    LastName: 'Johnson',
    Prefix: 'Mrs.',
    Position: 'Controller',
    Picture: 'images/employees/06.png',
    BirthDate: new Date('1974/11/5'),
    HireDate: new Date('2005/05/11'),
    Notes: notes,
    Address: '4600 N Virginia Rd.'
  };

  return (
    <React.Fragment>
      <h2 className={'content-block'}>Profile</h2>

      <div className={'content-block dx-card responsive-paddings'}>
        <div className={'form-avatar'}>
          <img
            alt={''}
            src={`https://js.devexpress.com/Demos/WidgetsGallery/JSDemos/${
              employee.Picture
            }`}
          />
        </div>
        <span>{notes}</span>
      </div>
      <div className={'content-block dx-card responsive-paddings'}>
        <h3>Cantidad de Dinero: ${amount}</h3>
      </div>
      <div>
        <stripe-buy-button
          buy-button-id="buy_btn_1OEK0GAFFbvLfn23siZgFODV"
          publishable-key="pk_test_51OEJi2AFFbvLfn239X7UMMdeCaTFWdSlRKgyL1DEebJ5e77TrGhfjoZvqjkbggtXrMETXGoOcE6PyQVihW4yDH1w00ycCaynVT"
        >
        </stripe-buy-button>
      </div>
      
      <div className={'content-block dx-card responsive-paddings'}>
        <Form
          id={'form'}
          defaultFormData={employee}
          onFieldDataChanged={e => e.dataField === 'Notes' && setNotes(e.value)}
          labelLocation={'top'}
          colCountByScreen={colCountByScreen}
        />
      </div>
    </React.Fragment>
  );
}

const colCountByScreen = {
  xs: 1,
  sm: 2,
  md: 3,
  lg: 4
};
