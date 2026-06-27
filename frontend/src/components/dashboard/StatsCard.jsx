export default function StatsCard({

    title,

    value,

    color = "blue",

}) {

    const colors = {

        blue: "text-blue-600",

        green: "text-green-600",

        purple: "text-purple-600",

    };

    return (

        <div className="bg-white rounded-xl shadow-md p-6">

            <p className="text-gray-500">

                {title}

            </p>

            <h2 className={`text-4xl font-bold mt-3 ${colors[color]}`}>

                {value}

            </h2>

        </div>

    );

}