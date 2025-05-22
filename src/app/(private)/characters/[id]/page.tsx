import { AppSidebar } from "@/app/_components/app-sidebar";
import { SidebarProvider } from "@/app/_components/_shadcn/sidebar";
import { AppBreadcrumb } from "@/app/_components/app-breadcrumb";
import { AppMobileHeader } from "@/app/_components/app-mobile-header";
import { Card, CardContent, CardHeader, CardTitle } from "@/app/_components/_shadcn/card";
import Image from "next/image";
import { Separator } from "@/app/_components/_shadcn/separator";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/app/_components/_shadcn/accordion";
import { EllipsisVertical, Search, Shield } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "@radix-ui/react-avatar";
import { Input } from "@/app/_components/_shadcn/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/app/_components/_shadcn/tabs";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/app/_components/_shadcn/table";
import { Button } from "@/app/_components/_shadcn/button";


export default function CharacterById() {
  return (
    <main className="bg-black">
      <SidebarProvider className="flex flex-col">
        <AppSidebar className="max-sm:mt-6"/>
        <AppMobileHeader/>
        <AppBreadcrumb className="mx-auto sm:my-6"/>
        <Card className="sm:ml-(--sidebar-width) h-[880px] max-sm:ml-2 max-sm:mt-2 mr-2 p-0">
          <div className="flex sm:flex-row-reverse max-sm:flex-col h-full">
            <div className="sm:w-96 max-sm:hidden">
              <div className="flex flex-col h-full items-center p-6 gap-4">
                <p className="font-bold">Painel de Controle</p>
                <Button variant="outline" className="w-full">Editar</Button>
                <Button variant="outline" className="w-full">Importar</Button>
                <Button variant="outline" className="w-full">Exportar</Button>
                <Button variant="outline" className="w-full">Excluir</Button>
              </div>
            </div>
            <Separator orientation="vertical"  className="max-sm:hidden"/>
            <div className="flex sm:flex-row max-sm:flex-col w-full h-full p-6 gap-4">
              <div className="flex flex-col h-full gap-4">
                <Image
                  src="https://res.cloudinary.com/dlpmcjihv/image/upload/v1747784482/gwendalin.Avatar_gccsuq.webp"
                  width={500}
                  height={500}
                  alt="avatar" 
                  className="size-60 rounded-full max-sm:mx-auto"
                />
                <div className="flex flex-col items-center">
                  <p className="text-4xl font-bold">Gwendalin</p>
                  <p className="text-lg">A Dama do Lago</p>
                </div>
                <Accordion type="single" collapsible defaultValue="item-1">
                  <AccordionItem value="item-1">
                    <AccordionTrigger className="pb-2 !important">Perícias</AccordionTrigger>
                    <AccordionContent className="w-60 flex flex-row flex-wrap gap-1">
                      <div className="p-1 bg-gray-800 rounded">
                        <p className="text-[10px] font-bold tracking-wider">ATLETISMO | +4</p>
                      </div>
                      <div className="p-1 bg-gray-800 rounded">
                        <p className="text-[10px] font-bold tracking-wider">ATUAÇÃO | +6</p>
                      </div>
                      <div className="p-1 bg-gray-800 rounded">
                        <p className="text-[10px] font-bold tracking-wider">PERCEPÇÃO | +6</p>
                      </div>
                    </AccordionContent>
                  </AccordionItem> 
                </Accordion>
                <Accordion type="single" collapsible defaultValue="item-1">
                  <AccordionItem value="item-1">
                    <AccordionTrigger className="pt-0 pb-2 !important">Armas</AccordionTrigger>
                    <AccordionContent className="w-60 flex flex-row flex-wrap gap-1">
                      <div className="p-1 bg-gray-800 rounded">
                        <p className="text-[10px] font-bold tracking-wider">ARMAS SIMPLES</p>
                      </div>
                      <div className="p-1 bg-gray-800 rounded">
                        <p className="text-[10px] font-bold tracking-wider">ARMAS MARCIAIS</p>
                      </div>
                    </AccordionContent>
                  </AccordionItem> 
                </Accordion>
                <Accordion type="single" collapsible defaultValue="item-1">
                  <AccordionItem value="item-1">
                    <AccordionTrigger className="pt-0 pb-2 !important">Armaduras</AccordionTrigger>
                    <AccordionContent className="w-60 flex flex-row flex-wrap gap-1">
                      <div className="p-1 bg-gray-800 rounded">
                        <p className="text-[10px] font-bold tracking-wider">LEVES</p>
                      </div>
                      <div className="p-1 bg-gray-800 rounded">
                        <p className="text-[10px] font-bold tracking-wider">MÉDIAS</p>
                      </div>
                      <div className="p-1 bg-gray-800 rounded">
                        <p className="text-[10px] font-bold tracking-wider">ESCUDOS</p>
                      </div>
                    </AccordionContent>
                  </AccordionItem> 
                </Accordion>
              </div>
              <div className="flex flex-col h-full w-full gap-4 items-center">
                    
                <h1 className="text-2xl font-bold">Personagem Não Jogável</h1>

                <div className="flex sm:flex-row bg-(--sidebar-accent) mx-auto rounded py-4">
                  <div className="w-30 h-20 flex flex-col items-center justify-between">
                    <p className="text-sm text-slate-300 font-bold tracking-wider">FOR</p>
                    <p className="text-xl font-bold tracking-wider">+3</p>
                    <div className="text-sm flex flex-row justify-between items-center gap-2 font-bold tracking-wider bg-(--card-accent-secundary) p-0.5 rounded">
                      <Shield className="size-4 fill-current"/>
                      <p>+5</p>
                    </div>
                  </div>
                  <Separator orientation="vertical" />
                  <div className="w-30 h-20 flex flex-col items-center justify-between">
                    <p className="text-sm text-slate-300 font-bold tracking-wider">AGI</p>
                    <p className="text-xl font-bold tracking-wider">+0</p>
                    <div className="text-sm flex flex-row justify-between items-center gap-2 font-bold tracking-wider bg-(--card-accent-secundary) p-0.5 rounded">
                      <Shield className="size-4"/>
                      <p>+0</p>
                    </div>
                  </div>
                  <Separator orientation="vertical" />
                  <div className="w-30 h-20 flex flex-col items-center justify-between">
                    <p className="text-sm text-slate-300 font-bold tracking-wider">INT</p>
                    <p className="text-xl font-bold tracking-wider">-1</p>
                    <div className="text-sm flex flex-row justify-between items-center gap-2 font-bold tracking-wider bg-(--card-accent-secundary) p-0.5 rounded">
                      <Shield className="size-4"/>
                      <p>-1</p>
                    </div>
                  </div>
                  <Separator orientation="vertical" />
                  <div className="w-30 h-20 flex flex-col items-center justify-between">
                    <p className="text-sm text-slate-300 font-bold tracking-wider">PRE</p>
                    <p className="text-xl font-bold tracking-wider">+4</p>
                    <div className="text-sm flex flex-row justify-between items-center gap-2 font-bold tracking-wider bg-(--card-accent-secundary) p-0.5 rounded">
                      <Shield className="size-4 fill-current"/>
                      <p>+4</p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-row flex-wrap gap-2 max-w-122 justify-center">
                    <div className="flex flex-row p-2 border border-(--border) rounded gap-2 items-center w-60">
                        <Avatar className="size-10">
                            <AvatarImage src="https://res.cloudinary.com/dlpmcjihv/image/upload/v1747864411/Screenshot_84_l55chh.jpg"/>
                            <AvatarFallback>Wi</AvatarFallback>
                        </Avatar>
                        <div className="flex flex-col">
                            <p className="font-bold">Bruxa</p>
                            <p className="text-xs text-gray-300">Arquétipo</p>
                        </div>
                    </div>
                    <div className="flex flex-row p-2 border border-(--border) rounded gap-2 items-center max-w-60 w-60">
                        <Avatar className="size-10">
                            <AvatarImage src="https://res.cloudinary.com/dlpmcjihv/image/upload/v1747864352/tumblr_06339f678ff44928176424b46b510757_b1e548ff_1280_dzkdzi.png"/>
                            <AvatarFallback>Or</AvatarFallback>
                        </Avatar>
                        <div className="flex flex-col">
                            <p className="font-bold">Orador</p>
                            <p className="text-xs text-gray-300">Trilha</p>
                        </div>
                        <p className="font-bold text-lg ml-auto mr-1">3</p>
                    </div>
                </div>

                <Tabs defaultValue="bio" className="w-full">
                  <TabsList className="w-full">
                    <TabsTrigger value="bio">Biografia</TabsTrigger>
                    <TabsTrigger value="features">Habilidades</TabsTrigger>
                    <TabsTrigger value="inventory">Inventário</TabsTrigger>
                    <TabsTrigger value="techniques">Técnicas</TabsTrigger>
                  </TabsList>
                  <TabsContent value="bio" className="flex flex-col flex-wrap gap-2 justify-center">
                    <div className="">
                      <Card className="px-2 py-2 gap-2">
                        <CardHeader className="px-4 mb-[-6]">
                          <CardTitle  className="text-[0.7rem] font-bold tracking-wider text-gray-300">APARÊNCIA</CardTitle>
                        </CardHeader>
                        <CardContent className="text-sm px-4 flex flex-row flex-wrap gap-4">
                          <div className="w-30">
                            <p className="text-sm">17</p>
                            <Separator/>
                            <p className="text-[0.7rem] font-bold tracking-wider text-gray-300">IDADE</p>
                          </div>
                          <div className="w-30">
                            <p className="text-sm">Azul</p>
                            <Separator/>
                            <p className="text-[0.7rem] font-bold tracking-wider text-gray-300">OLHOS</p>
                          </div>
                          <div className="w-30">
                            <p className="text-sm">Médio</p>
                            <Separator/>
                            <p className="text-[0.7rem] font-bold tracking-wider text-gray-300">TAMANHO</p>
                          </div>
                          <div className="w-30">
                            <p className="text-sm">1.63m</p>
                            <Separator/>
                            <p className="text-[0.7rem] font-bold tracking-wider text-gray-300">ALTURA</p>
                          </div>
                          <div className="w-30">
                            <p className="text-sm">Branca</p>
                            <Separator/>
                            <p className="text-[0.7rem] font-bold tracking-wider text-gray-300">PELE</p>
                          </div>
                          <div className="w-30">
                            <p className="text-sm">Vermelho</p>
                            <Separator/>
                            <p className="text-[0.7rem] font-bold tracking-wider text-gray-300">CABELO</p>
                          </div>
                          <div className="w-30">
                            <p className="text-sm">57</p>
                            <Separator/>
                            <p className="text-[0.7rem] font-bold tracking-wider text-gray-300">PESO</p>
                          </div>
                        </CardContent>
                      </Card>
                      
                    </div>
                    <div className="flex flex-row gap-2 justify-center">
                      <Card className="py-3 rounded-lg gap-0 w-123 h-112">
                        <CardHeader className="px-4 mb-[-6]">
                          <CardTitle  className="text-[0.7rem] font-bold tracking-wider text-gray-300">HISTÓRIA</CardTitle>
                        </CardHeader>
                        <CardContent className="text-sm px-4">
                          <p>Lady é uma bruxa que sonha em fazer o mundo inteiro sorrir com sua música. Se identificando como uma vilã, faz o que bem entender sem se importar com as regras da sociedade ou o que é bem visto.</p>
                        </CardContent>
                      </Card>
                    <div className="flex flex-col gap-3 w-123">
                      <Card className="py-3 rounded-lg gap-0">
                        <CardHeader className="px-4 mb-[-6]">
                          <CardTitle  className="text-[0.7rem] font-bold tracking-wider text-gray-300">TRAÇOS DE PERSONALIDADE</CardTitle>
                        </CardHeader>
                        <CardContent className="text-sm px-4">
                          <p>Lady é uma bruxa que sonha em fazer o mundo inteiro sorrir com sua música. Se identificando como uma vilã, faz o que bem entender sem se importar com as regras da sociedade ou o que é bem visto.</p>
                        </CardContent>
                      </Card>
                      <Card className="py-3 rounded-lg gap-0">
                        <CardHeader className="px-4 mb-[-6]">
                          <CardTitle  className="text-[0.7rem] font-bold tracking-wider text-gray-300">IDEAIS</CardTitle>
                        </CardHeader>
                        <CardContent className="text-sm px-4">
                          <p>Lady é uma bruxa que sonha em fazer o mundo inteiro sorrir com sua música. Se identificando como uma vilã, faz o que bem entender sem se importar com as regras da sociedade ou o que é bem visto.</p>
                        </CardContent>
                      </Card>
                      <Card className="py-3 rounded-lg gap-0">
                        <CardHeader className="px-4 mb-[-6]">
                          <CardTitle  className="text-[0.7rem] font-bold tracking-wider text-gray-300">VÍNCULOS</CardTitle>
                        </CardHeader>
                        <CardContent className="text-sm px-4">
                          <p>Lady é uma bruxa que sonha em fazer o mundo inteiro sorrir com sua música. Se identificando como uma vilã, faz o que bem entender sem se importar com as regras da sociedade ou o que é bem visto.</p>
                        </CardContent>
                      </Card>
                      <Card className="py-3 rounded-lg gap-0">
                        <CardHeader className="px-4 mb-[-6]">
                          <CardTitle  className="text-[0.7rem] font-bold tracking-wider text-gray-300">DEFEITOS</CardTitle>
                        </CardHeader>
                        <CardContent className="text-sm px-4">
                          <p>Lady é uma bruxa que sonha em fazer o mundo inteiro sorrir com sua música. Se identificando como uma vilã, faz o que bem entender sem se importar com as regras da sociedade ou o que é bem visto.</p>
                        </CardContent>
                      </Card>
                    </div>
                    </div>
                    
                  </TabsContent>
                  <TabsContent value="features">
                    <Search className="absolute mt-4 ml-4 size-4 text-muted-foreground"/>
                    <Input className="h-12 pl-12 mb-4"  placeholder="Buscar habilidades"/>
                    <Table>
                      <TableHeader className="bg-(--sidebar-accent)">
                        <TableRow>
                          <TableHead className="w-lg pl-4">Habilidades</TableHead>
                          <TableHead className="text-center">Usos</TableHead>
                          <TableHead className="text-center">Rolagem</TableHead>
                          <TableHead className="text-center">Fórmula</TableHead>
                          <TableHead className="w-20"></TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody className="mb-10">
                        <TableRow>
                          <TableCell className="font-medium flex flex-row gap-2 items-center pl-4">
                            <Avatar className="size-8 rounded-full border-2 border-(--card-accent-secundary)">
                              <AvatarImage className="rounded-full" src="https://res.cloudinary.com/dlpmcjihv/image/upload/v1747864352/tumblr_06339f678ff44928176424b46b510757_b1e548ff_1280_dzkdzi.png"/>
                              <AvatarFallback>Or</AvatarFallback>
                            </Avatar>
                            <div className="flex flex-col">
                              <p className="font-bold">Almejar o Impossível</p>
                              <p className="text-xs text-gray-300">Benção</p>
                            </div>
                            
                          </TableCell>
                          <TableCell className="text-center">-</TableCell>
                          <TableCell className="text-center">-</TableCell>
                          <TableCell className="text-center">-</TableCell>
                          <TableCell className="pr-4"><EllipsisVertical className="size-4 my-1 ml-auto"/></TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                    <Table className="mt-4">
                      <TableHeader className="bg-(--sidebar-accent)">
                        <TableRow>
                          <TableHead className="w-lg pl-4">Ações</TableHead>
                          <TableHead className="text-center">Usos</TableHead>
                          <TableHead className="text-center">Rolagem</TableHead>
                          <TableHead className="text-center">Fórmula</TableHead>
                          <TableHead className="w-20"></TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        <TableRow>
                          <TableCell className="font-medium flex flex-row gap-2 items-center pl-4">
                            <Avatar className="size-8 rounded-full border-2 border-(--card-accent-secundary)">
                              <AvatarImage className="rounded-full" src="https://res.cloudinary.com/dlpmcjihv/image/upload/v1747864352/tumblr_06339f678ff44928176424b46b510757_b1e548ff_1280_dzkdzi.png"/>
                              <AvatarFallback>Or</AvatarFallback>
                            </Avatar>
                            <div className="flex flex-col">
                              <p className="font-bold">Almejar o Impossível</p>
                              <p className="text-xs text-gray-300">Benção</p>
                            </div>
                            
                          </TableCell>
                          <TableCell className="text-center">1 / 1</TableCell>
                          <TableCell className="text-center">+6</TableCell>
                          <TableCell className="text-center">1d10+5</TableCell>
                          <TableCell className="pr-4"><EllipsisVertical className="size-4 my-1 ml-auto"/></TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </TabsContent>
                </Tabs>

              </div>
            </div>
          </div>
            
        </Card>
      </SidebarProvider>
    </main>
  );
}
