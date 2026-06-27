import { Link } from "react-router-dom";
import { Upload } from "lucide-react";

export default function PageHeader({

    title,

    subtitle,

    buttonText,

    buttonLink,

}) {

    return (

        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-10">

            <div>

                <h1 className="text-4xl font-bold text-slate-900">

                    {title}

                </h1>

                <p className="text-slate-500 mt-2">

                    {subtitle}

                </p>

            </div>

            {

                buttonText && (

                    <Link

                        to={buttonLink}

                        className="mt-6 md:mt-0 flex items-center gap-2 bg-blue-600 hover:bg-blue-700 transition text-white px-6 py-3 rounded-xl shadow"

                    >

                        <Upload size={18}/>

                        {buttonText}

                    </Link>

                )

            }

        </div>

    );

}