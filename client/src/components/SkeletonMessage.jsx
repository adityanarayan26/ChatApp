import React from 'react'

const SkeletonMessage = () => {
    return (
        <div>

            <div className="flex w-52 flex-col gap-4 absolute left-8 top-[4rem]">
                <div className="flex items-center gap-4">
                    <div className="skeleton h-16 w-16 shrink-0 rounded-full"></div>
                    <div className="flex flex-col gap-4">
                        <div className="skeleton h-4 w-20"></div>
                        <div className="skeleton h-4 w-28"></div>
                    </div>
                </div>

            </div>

            <div className="flex w-52 flex-col gap-4 absolute right-4 top-[8rem]">
                <div className="flex items-center gap-4">
                    <div className="skeleton h-16 w-16 shrink-0 rounded-full"></div>
                    <div className="flex flex-col gap-4">
                        <div className="skeleton h-4 w-20"></div>
                        <div className="skeleton h-4 w-28"></div>
                    </div>
                </div>
            </div>

            <div className="flex w-52 flex-col gap-4 absolute left-8 top-[15rem]">
                <div className="flex items-center gap-4">
                    <div className="skeleton h-16 w-16 shrink-0 rounded-full"></div>
                    <div className="flex flex-col gap-4">
                        <div className="skeleton h-4 w-20"></div>
                        <div className="skeleton h-4 w-28"></div>
                    </div>
                </div>

            </div>


            <div className="flex w-52 flex-col gap-4 absolute right-4  top-[19rem]">
                <div className="flex items-center gap-4">
                    <div className="skeleton h-16 w-16 shrink-0 rounded-full"></div>
                    <div className="flex flex-col gap-4">
                        <div className="skeleton h-4 w-20"></div>
                        <div className="skeleton h-4 w-28"></div>
                    </div>
                </div>

            </div>

        </div>

    )
}

export default SkeletonMessage