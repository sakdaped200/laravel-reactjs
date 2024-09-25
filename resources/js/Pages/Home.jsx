import { Head, Link, usePage } from "@inertiajs/react";
import { useRoute } from "../../../vendor/tightenco/ziggy"
import { useState } from "react";

export default function Home({ posts }) {

    const route = useRoute();
    const { flash } = usePage().props;
    const [flashMsg, setFlashMsg] = useState(flash.message);
    const [flashMsgSuccess, setFlashMsgSuccess] = useState(flash.success);
    const { component } = usePage()

    setTimeout(() => {
        setFlashMsg(null);
        setFlashMsgSuccess(null);
    }, 2000);


    console.log(usePage());

    return (
        <div>
            <Head title={component}/>
            <h1 className="title">Welcome</h1>
            { flashMsg && (
                <div className="absolute top-24 right-6 bg-rose-500 p-2 rounded-md shadow-lg text-sm text-white">{flashMsg}</div>
            )}

            { flashMsgSuccess && (
                <div className="absolute top-24 right-6 bg-green-500 p-2 rounded-md shadow-lg text-sm text-white">{flashMsgSuccess}</div>
            )}

            <div>
                {posts.data.map((post) => (
                    <div key={post.id} className="p-4 border-b">
                        <div className="text-sm text-slate-500">
                            <span>Posted on: </span>
                            <span>{new Date(post.created_at).toLocaleTimeString('th')}</span>
                        </div>
                        <p className="font-medium">{post.body}</p>

                        {/* <Link href={`/posts/${post.id}`} className="text-link">
                            Read more..
                        </Link> */}

                        <Link href={route('posts.show', post)} className="text-link">
                            Read more..
                        </Link>
                    </div>
                ))}
            </div>

            <div className="py-12 px-4 text-right">
                {posts.links.map((link, index) => (
                    link.url ?
                    <Link
                        className={`p-1 mx-1 ${ link.active ? 'text-blue-500' : '' }`}
                        key={link.label}
                        href={link.url}
                        dangerouslySetInnerHTML={{__html:link.label}}
                    />
                    :
                    <span
                        key={link.label}
                        className="p-1 mx-1 text-slate-200 cursor-not-allowed"
                        dangerouslySetInnerHTML={{__html:link.label}} />
                ))}

            </div>
        </div>
    )
}

