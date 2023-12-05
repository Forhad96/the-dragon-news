import getAllCategoryNews from "@/utils/getAllCategoryNews";

const page = async({searchParams}) => {
    console.log(searchParams.category);
    const {data} = await getAllCategoryNews(searchParams.category);
    console.log(data);
    return (
      <div>
        <p>
          Total <strong>{searchParams.category}</strong>:{data.length}{" "}
        </p>
      </div>
    );
};
export default page;