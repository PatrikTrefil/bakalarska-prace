'use client'

import {Button} from "@/components/ui/button"
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card"
import {Badge} from "@/components/ui/badge"
import Link from "next/link";

export function HomePage() {
    return (
        <div
            className="min-h-screen bg-gradient-to-b from-gray-200 to-gray-300 dark:from-zinc-900 dark:to-zinc-900 flex items-center justify-center p-4">
            <Card className="w-full max-w-4xl dark:bg-zinc-800 dark:text-white">
                <CardHeader className="text-center">
                    <CardTitle className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                        Bachelor&apos;s Thesis
                    </CardTitle>
                    <CardDescription className="text-xl mt-2">Mental Health Monitoring Platform</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                    <div className="text-center space-y-2">
                        <p className="text-lg font-medium">Author: Patrik Trefil</p>
                        <p className="text-sm text-muted-foreground">
                            Advisor: Petr Škoda | Referee: Irena Holubová
                        </p>
                        <p className="text-sm text-muted-foreground">
                            Department of Software Engineering
                        </p>
                        <Badge variant="secondary" className="text-sm font-semibold bg-lime-400 dark:bg-lime-900">
                            Grade: Excellent
                        </Badge>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <Button className="w-full" variant="default" asChild>
                            <Link href="https://bachelors-thesis.patriktrefil.com/prace.pdf">
                            <i className="bi bi-file-earmark-text-fill mr-1"></i>
                            View Thesis (Czech)
                            </Link>
                        </Button>
                        <Button className="w-full" variant="default" asChild>
                            <Link href="https://github.com/PatrikTrefil/mental-health-monitoring-platform">
                            <i className="bi bi-github mr-1"></i>
                            Source Code on GitHub
                            </Link>
                        </Button>
                        <Button className="w-full" variant="default" asChild>
                            <Link href="https://bachelors-thesis.patriktrefil.com/abstrakt.pdf">
                            <i className="bi bi-file-earmark-text-fill mr-1"></i>
                            Abstract (Czech)
                            </Link>
                        </Button>
                        <Button className="w-full" variant="default" asChild>
                            <Link href="https://bachelors-thesis.patriktrefil.com/abstrakt-en.pdf">
                            <i className="bi bi-file-earmark-text-fill mr-1"></i>
                            Abstract (English)
                            </Link>
                        </Button>
                        <Button className="w-full" variant="default" asChild>
                            <Link href="https://poster-bachelor-thesis.patriktrefil.com/poster.pdf">
                            <i className="bi bi-file-earmark-easel-fill mr-1"></i>
                            Poster (Czech)
                            </Link>
                        </Button>
                        <Button className="w-full" variant="default" asChild>
                            <Link href="https://www.patriktrefil.com/" >
                            <i className="bi bi-person-fill mr-1"></i>
                                Author&apos;s website
                            </Link>
                        </Button>
                        <Button className="w-full md:col-span-2" variant="default">
                            <i className="bi bi-building-fill mr-1"></i>
                            University&apos;s website
                        </Button>
                        <Button className="w-full md:col-span-2" variant="default" asChild>
                            <Link href="https://dspace.cuni.cz/handle/20.500.11956/192079">
                            <i className="bi bi-building-fill mr-1"></i>
                            Thesis entry in official digital repository
                            </Link>
                        </Button>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}