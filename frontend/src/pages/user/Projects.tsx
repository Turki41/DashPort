import { useState } from "react"
import DashboardLayout from "../../components/layouts/DashboardLayout"
import AdminView from "../../components/AdminView"
import { ExternalLink, Pencil, Trash2 } from "lucide-react"

interface Project {
    title: string,
    description: string,
    techStack: string[],
    siteUrl: string,
    img: string, // the secure url used to display the image from cloudinary.
    imgId: string // the image id used for deleting the image from cloudinary when its no longer needed.
}

const Projects = () => {
    const [projects, setProjects] = useState<Project[]>([
        { title: 'title', description: ' is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to', techStack: ['React', 'NextJs'], img: 'https://res.cloudinary.com/dfit2cktw/image/upload/v1763305009/Projects_thumbnails/hbul7iw2fxpwris2y4kb.png', imgId: '', siteUrl: '' }
    ])

    const colors = ['#c385ff', '#ffb6da']
    const borders = ['#6d28d9', '#FF69B4']
    const texts = ['#6b00d1', '#ff1e8c']

    return (
        <DashboardLayout>
            {/* <Modal openModal={openModal} setOpenModal={clearFormInputs} >
                <div className='flex flex-col gap-2'>
                    <div>
                        <h1 className='text-xl font-bold'>Add New Technology</h1>
                        <p className='text-gray-400'>fill all the details to add a new technology</p>
                    </div>

                    <form onSubmit={update ? handleEditTech : handleAddTechnology}>
                        <div className=' flex flex-col gap-2'>
                            <Input name='label' onChange={(e: React.ChangeEvent<HTMLInputElement>) => setLabel(e.target.value)} type='text' value={label} label='Label' />
                            <Input name='name' onChange={(e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value)} type='text' value={name} label='Name' />
                            <Input name='library' onChange={(e: React.ChangeEvent<HTMLInputElement>) => setLibrary(e.target.value)} type='text' value={library} label='Library' />
                            <Input name='color' onChange={(e: React.ChangeEvent<HTMLInputElement>) => setColor(e.target.value)} type='text' value={color} label='Color' />
                        </div>

                        <div className='w-full flex gap-2 items-center justify-end mt-4'>
                            <button disabled={isUpdatingTech} type='button' onClick={() => clearFormInputs()} className='border px-4 py-2 rounded-full bg-gray-200'>Cancel</button>
                            <button disabled={isUpdatingTech} type='submit' className='bg-primary px-6 py-2 rounded-full text-white disabled:opacity-50'>{update ? 'Update' : 'Add'}</button>
                        </div>
                    </form>

                </div>
            </Modal> */}

            <div>
                <h1 className="text-3xl mb-1 font-bold">Projects</h1>
                <p className="mb-2 text-gray-400">show your projects.</p>

                <div className="mt-6">

                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 items-center">
                        {projects.map((project, index) => (
                            <div className="bg-white rounded-2xl flex flex-col relative overflow-hidden hover:-translate-y-1 hover:shadow-2xl transition-all duration-200" key={index}>
                                <img className="rounded-t-2xl object-cover w-full" src={project.img} alt={project.title} />

                                <div className="absolute top-3 right-3">
                                    <AdminView>
                                        <button className="bg-white rounded-md hover:bg-gray-300 p-0.5 transition-colors mr-1.5"><Pencil className="p-0.5" /></button>
                                        <button className="bg-white rounded-md hover:bg-gray-300 p-0.5 transition-colors"><Trash2 className="p-0.5 text-red-500" /></button>
                                    </AdminView>
                                </div>

                                <div className="w-full flex flex-col pt-4 px-3 items-start justify-start">
                                    <h2 className="text-xl font-semibold mb-4">{project.title}</h2>
                                    <p className="text-gray-600 break-words line-clamp-4">{project.description}</p>
                                </div>

                                <div className="flex gap-3 w-full items-center justify-start px-3 my-4">
                                    {project.techStack.map((tech, index) => (
                                        <div key={index} className={`w-20 rounded-xl border-2 text-[#612484] border-primary/20 bg-secondary-light/90`} >
                                            <span className="font-semibold items-center py-0.5 justify-center flex">{tech}</span>
                                        </div>
                                    ))}
                                </div>

                                <a href={project.siteUrl} className="flex gap-2 text-secondary mb-4 px-3 max-w-fit hover:text-secondary/80 transition-colors">
                                    <p>View Project</p>
                                    <ExternalLink />
                                </a>

                            </div>
                        ))}
                    </div>

                </div>

            </div>
        </DashboardLayout>
    )
}

export default Projects