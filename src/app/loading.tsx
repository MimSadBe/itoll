import Image from "next/image";

export default function Loading() {
    return (
        <div className="flex justify-center items-center h-64">
            <Image
                src={"/assets/images/loading.svg"}
                alt={"product.title"}
                width={100}
                height={100}
                className="object-cover object-center"
                loading="lazy"
            />
        </div>
    );
}