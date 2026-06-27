export default function Input({
    label,
    type = "text",
    register,
    name,
    errors,
    placeholder,
    validation = {},
}) {

    return (

        <div className="space-y-2">

            <label className="font-medium">

                {label}

            </label>

            <input
                type={type}
                placeholder={placeholder}
                {...register(name, validation)}
                className="w-full border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
            />

            {

                errors[name] &&

                <p className="text-red-500 text-sm">

                    {errors[name].message}

                </p>

            }

        </div>

    );

}