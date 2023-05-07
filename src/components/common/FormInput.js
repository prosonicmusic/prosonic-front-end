export default function InputComponent({
  formik,
  name,
  type,
  className,
  placeholder = "",
}) {
  return (
    <div className={className}>
      {formik.touched[name] && formik.errors[name] ? (
        <div className="mb-1 ml-2 text-rose-500 text-left text-xs font-bold">
          {formik.errors[name]}
        </div>
      ) : null}
      <input
        className="w-full mb-5 p-[10px] bg-[#121316] rounded-lg outline-none border-none"
        type={type || "text"}
        placeholder={placeholder}
        name={name}
        id={name}
        value={formik.values[name]}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />
    </div>
  );
}
