import './MakePayment.scss';

export const MakePayment = () => {
  return (
    <div className='makepayment__inner'>
      <h4 className='m-0 py-2'>Settings</h4>
      <p className='m-0'>Language</p>
      <select className='til__select form-select my-1'>
        <option value='uz'>Uzbekcha</option>
        <option value='ru'>Русский</option>
        <option value='eng'>English</option>
      </select>
      <p>Please enter your first name.</p>

      <div>
        <div>
          <div class='form-check form-switch'>
            <input
              className='form-check-input input__checkbox'
              type='checkbox'
            />
          </div>
        </div>
      </div>
    </div>
  );
};
