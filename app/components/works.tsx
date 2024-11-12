import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';
import Image from 'next/image';
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ExternalLink } from "lucide-react"

export default function WorkSection() {
    return (
        <div className="w-full px-4 py-8 md:px-6 lg:px-8">
            <div className="mx-auto max-w-6xl space-y-8">
                <div className="text-center space-y-2">
                    <div id="work" className="text-center mb-8">
                        <span className="px-4 py-2 rounded-full bg-slate-800 text-sm text-white inline-block">Work</span>
                    </div>
                    <p className="text-lg text-muted-foreground">
                        Some of the noteworthy projects I have built:
                    </p>
                </div>
                <div className="grid gap-8">
                    <Card className="overflow-hidden border-none bg-gradient-to-t from-gray-100 to-white p-0.5 dark:from-gray-900 dark:to-gray-800">
                        <CardContent className="grid gap-4 p-6 md:grid-cols-2 md:gap-8">
                            <div className="overflow-hidden rounded-lg bg-gray-100 dark:bg-gray-800">
                                <Swiper
                                    modules={[Navigation, Pagination]}
                                    spaceBetween={10}
                                    slidesPerView={1}
                                    navigation
                                    pagination={{ clickable: true }}
                                >
                                    <SwiperSlide>
                                        <Image
                                            src="/img/sweetpricer/sweetpricer1.png"
                                            alt="SweetPricer project screenshot 1"
                                            width={800}
                                            height={400}
                                            className="aspect-[1.6] h-auto w-full object-cover"
                                        />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <Image
                                            src="/img/sweetpricer/sweetpricer2.png"
                                            alt="SweetPricer project screenshot 2"
                                            width={800}
                                            height={400}
                                            className="aspect-[1.6] h-auto w-full object-cover"
                                        />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <Image
                                            src="/img/sweetpricer/sweetpricer3.png"
                                            alt="SweetPricer project screenshot 3"
                                            width={800}
                                            height={400}
                                            className="aspect-[1.6] h-auto w-full object-cover"
                                        />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <Image
                                            src="/img/sweetpricer/sweetpricer4.png"
                                            alt="SweetPricer project screenshot 4"
                                            width={800}
                                            height={400}
                                            className="aspect-[1.6] h-auto w-full object-cover"
                                        />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <Image
                                            src="/img/sweetpricer/sweetpricer5.png"
                                            alt="SweetPricer project screenshot 5"
                                            width={800}
                                            height={400}
                                            className="aspect-[1.6] h-auto w-full object-cover"
                                        />
                                    </SwiperSlide>
                                </Swiper>
                            </div>
                            <div className="flex flex-col justify-center space-y-4">
                                <h3 className="text-2xl font-bold">SweetPricer</h3>
                                <p className="text-muted-foreground">
                                    SweetPricer is a micro-SaaS solution designed to help small and medium-sized businesses set prices accurately and keep efficient control of their products.
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    <Badge variant="secondary">React</Badge>
                                    <Badge variant="secondary">Next.js</Badge>
                                    <Badge variant="secondary">TypeScript</Badge>
                                    <Badge variant="secondary">MySql</Badge>
                                    <Badge variant="secondary">Tailwindcss</Badge>
                                    <Badge variant="secondary">Figma</Badge>
                                    <Badge variant="secondary">Stripe</Badge>
                                    <Badge variant="secondary">Git</Badge>
                                </div>
                                <a
                                    href="https://www.sweetpricer.com.br/"
                                    className="inline-flex w-fit items-center gap-2 text-sm font-medium text-foreground hover:underline"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <ExternalLink className="h-4 w-4" />
                                    <span>View Project</span>
                                </a>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
            <div className="mx-auto max-w-6xl space-y-8 mt-20">
                <div className="grid gap-8">
                    <Card className="overflow-hidden border-none bg-gradient-to-t from-gray-100 to-white p-0.5 dark:from-gray-900 dark:to-gray-800">
                        <CardContent className="grid gap-4 p-6 md:grid-cols-2 md:gap-8">
                        <div className="flex flex-col justify-center space-y-4">
                                <h3 className="text-2xl font-bold">Tourbinou</h3>
                                <p className="text-muted-foreground">
                                    This system was designed to register and record travel destinations and tours, using API to search for states and cities, and to record tours where images can be saved along with the tour data.
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    <Badge variant="secondary">Vue.js</Badge>
                                    <Badge variant="secondary">TypeScript</Badge>
                                    <Badge variant="secondary">MySql</Badge>
                                    <Badge variant="secondary">Tailwindcss</Badge>
                                    <Badge variant="secondary">Figma</Badge>
                                    <Badge variant="secondary">Laravel</Badge>
                                    <Badge variant="secondary">Web API</Badge>
                                    <Badge variant="secondary">PHP</Badge>
                                    <Badge variant="secondary">Git</Badge>
                                </div>
                                <a
                                    href="https://github.com/GustavoViniciusDev/Tourbinou-Test"
                                    className="inline-flex w-fit items-center gap-2 text-sm font-medium text-foreground hover:underline"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <ExternalLink className="h-4 w-4" />
                                    <span>View Project</span>
                                </a>
                            </div>
                            <div className="overflow-hidden rounded-lg bg-gray-100 dark:bg-gray-800">
                                <Swiper
                                    modules={[Navigation, Pagination]}
                                    spaceBetween={10}
                                    slidesPerView={1}
                                    navigation
                                    pagination={{ clickable: true }}
                                >
                                    <SwiperSlide>
                                        <Image
                                            src="/img/tourbinou/tourbinou1.png"
                                            alt="Tourbinou project screenshot 1"
                                            width={800}
                                            height={400}
                                            className="aspect-[1.6] h-auto w-full object-cover"
                                        />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <Image
                                            src="/img/tourbinou/tourbinou2.png"
                                            alt="Tourbinou project screenshot 2"
                                            width={800}
                                            height={400}
                                            className="aspect-[1.6] h-auto w-full object-cover"
                                        />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <Image
                                            src="/img/tourbinou/tourbinou3.png"
                                            alt="Tourbinou project screenshot 3"
                                            width={800}
                                            height={400}
                                            className="aspect-[1.6] h-auto w-full object-cover"
                                        />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <Image
                                            src="/img/tourbinou/tourbinou4.png"
                                            alt="Tourbinou project screenshot 4"
                                            width={800}
                                            height={400}
                                            className="aspect-[1.6] h-auto w-full object-cover"
                                        />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <Image
                                            src="/img/tourbinou/tourbinou5.png"
                                            alt="Tourbinou project screenshot 5"
                                            width={800}
                                            height={400}
                                            className="aspect-[1.6] h-auto w-full object-cover"
                                        />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <Image
                                            src="/img/tourbinou/tourbinou6.png"
                                            alt="Tourbinou project screenshot 6"
                                            width={800}
                                            height={400}
                                            className="aspect-[1.6] h-auto w-full object-cover"
                                        />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <Image
                                            src="/img/tourbinou/tourbinou7.png"
                                            alt="Tourbinou project screenshot 7"
                                            width={800}
                                            height={400}
                                            className="aspect-[1.6] h-auto w-full object-cover"
                                        />
                                    </SwiperSlide>
                                </Swiper>
                            </div>
                            
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
}
