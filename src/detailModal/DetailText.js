export default function DetailedText(props) {
  return (
    <div className="py-4 px-8 DetailModal-text">
      <p className="text-gray-400">{props.meal}</p>
      <p className="text-xl font-semibold ">Pancake</p>
      <p className="text-gray-500 text-sm">
        Additional text that describes what the food is and what makes it so
        amazing, can be written manually or gathered as an api
      </p>
      <span class="bg-green-200 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded mr-2 dark:bg-gray-700 dark:text-gray-300">
        vegan
      </span>
    </div>
  );
}
