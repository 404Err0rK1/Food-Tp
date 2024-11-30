export default function AddressInputs({addressProps,setAddressProp,disabled=false}) {
  const {phone, streetAddress, postalCode, city, country} = addressProps;
  return (
    <>
      <label> Số điện thoại</label>
      <input
        disabled={disabled}
        type="tel" placeholder="Số điện thoại"
        value={phone || ''} onChange={ev => setAddressProp('phone', ev.target.value)} />
      <label>Địa chỉ</label>
      <input
        disabled={disabled}
        type="text" placeholder="Địa chỉ"
        value={streetAddress || ''} onChange={ev => setAddressProp('streetAddress', ev.target.value)}
      />
      <div className="grid grid-cols-2 gap-2">
        <div>
          <label>Mã bưu điện</label>
          <input
            disabled={disabled}
            type="text" placeholder="Mã bưu điện"
            value={postalCode || ''} onChange={ev => setAddressProp('postalCode', ev.target.value)}
          />
        </div>
        <div>
          <label>Quốc gia</label>
          <input
            disabled={disabled}
            type="text" placeholder="Quốc gia"
            value={city || ''} onChange={ev => setAddressProp('city', ev.target.value)}
          />
        </div>
      </div>
      <label>Thành phố/Tỉnh thành</label>
      <input
        disabled={disabled}
        type="text" placeholder="Thành phố/Tỉnh thành"
        value={country || ''} onChange={ev => setAddressProp('country', ev.target.value)}
      />
    </>
  );
}