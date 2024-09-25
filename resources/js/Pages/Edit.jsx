import { Head, useForm } from '@inertiajs/react';

export default function Edit({ post }) {

    const { data, setData, put, processing, errors } = useForm({
        body: post.body,
    })

    function submit(e) {
        e.preventDefault()
        put(route('posts.update', post));
    }

    return (
        <div>
            <Head title='Edit Post'/>
            <h1 className='title'>Update your post</h1>
            <div className='w-1/2 mx-auto'>
                <form onSubmit={submit}>
                    <textarea
                    className={`${errors.body && '!ring-red-500'}`}
                        rows="10"
                        value={data.body}
                        onChange={(e) => setData('body', e.target.value)}></textarea>

                        {errors.body && <p className='error'>{errors.body}</p>}

                    <button
                        className='primary-btn mt-4'
                        disabled={processing}>
                            Update
                        </button>
                </form>
            </div>

        </div>
    )
}
