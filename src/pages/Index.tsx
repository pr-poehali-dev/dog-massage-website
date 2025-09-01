import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

export default function Index() {
  const services = [
    {
      title: "Классический массаж",
      description: "Мягкие круговые движения для расслабления мышц головы и шеи",
      breeds: ["Лабрадор", "Золотистый ретривер", "Немецкая овчарка"],
      price: "от 1500 ₽",
      duration: "30 мин",
      icon: "Heart"
    },
    {
      title: "Точечный массаж",
      description: "Акупрессура для снятия стресса и улучшения кровообращения",
      breeds: ["Чихуахуа", "Йоркширский терьер", "Померанский шпиц"],
      price: "от 2000 ₽",
      duration: "45 мин",
      icon: "Target"
    },
    {
      title: "Ароматерапевтический",
      description: "Расслабляющий массаж с использованием эфирных масел",
      breeds: ["Хаски", "Маламут", "Самоед"],
      price: "от 2500 ₽",
      duration: "60 мин",
      icon: "Flower"
    }
  ];

  const testimonials = [
    {
      name: "Анна К.",
      pet: "Лабрадор Бакс",
      text: "После массажа Бакс стал намного спокойнее! Теперь ходим каждую неделю.",
      rating: 5
    },
    {
      name: "Михаил С.",
      pet: "Йорк Чарли",
      text: "Профессиональный подход, собака в восторге. Рекомендую всем!",
      rating: 5
    },
    {
      name: "Елена М.",
      pet: "Хаски Луна",
      text: "Отличный сервис! Луна стала лучше спать после сеансов.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/10 via-secondary/5 to-accent/10 py-20">
        <div className="absolute inset-0 bg-[url('/img/8e97c3ef-a2bd-4378-ac53-45fd22567d53.jpg')] bg-cover bg-center opacity-10"></div>
        <div className="container relative z-10 mx-auto px-4 text-center">
          <Badge className="mb-6 bg-primary/20 text-primary hover:bg-primary/30">
            <Icon name="Sparkles" size={16} className="mr-2" />
            Профессиональный уход
          </Badge>
          <h1 className="mb-6 text-5xl font-bold leading-tight bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            Массаж головы для собак
          </h1>
          <p className="mb-8 text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Индивидуальные техники массажа для разных пород собак. 
            Помогаем вашим питомцам расслабиться и улучшить самочувствие.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3">
              <Icon name="Calendar" size={20} className="mr-2" />
              Записаться на сеанс
            </Button>
            <Button variant="outline" size="lg" className="px-8 py-3">
              <Icon name="Phone" size={20} className="mr-2" />
              Консультация
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Наши услуги</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Каждая порода собак требует индивидуального подхода. Мы разработали специальные техники для максимального комфорта ваших питомцев.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:scale-105 border-0 bg-gradient-to-br from-card via-card to-card/50">
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto mb-4 w-16 h-16 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white">
                    <Icon name={service.icon} size={28} />
                  </div>
                  <CardTitle className="text-2xl">{service.title}</CardTitle>
                  <CardDescription className="text-base leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mb-4">
                    <h4 className="font-semibold mb-2 text-sm uppercase tracking-wide text-muted-foreground">
                      Подходит для пород:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {service.breeds.map((breed) => (
                        <Badge key={breed} variant="secondary" className="text-xs">
                          {breed}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div className="flex justify-between items-center pt-4 border-t">
                    <div>
                      <p className="font-bold text-lg text-primary">{service.price}</p>
                      <p className="text-sm text-muted-foreground">{service.duration}</p>
                    </div>
                    <Button size="sm" className="bg-secondary hover:bg-secondary/90">
                      Выбрать
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-gradient-to-br from-accent/5 to-primary/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Прозрачные цены</h2>
            <p className="text-xl text-muted-foreground">
              Никаких скрытых платежей. Стоимость зависит от породы и выбранной техники массажа.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <Icon name="Clock" size={40} className="mx-auto mb-4 text-primary" />
                <h3 className="font-bold text-lg mb-2">30 минут</h3>
                <p className="text-3xl font-bold text-primary">1500₽</p>
                <p className="text-sm text-muted-foreground mt-2">Базовый сеанс</p>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <Icon name="Timer" size={40} className="mx-auto mb-4 text-secondary" />
                <h3 className="font-bold text-lg mb-2">45 минут</h3>
                <p className="text-3xl font-bold text-secondary">2000₽</p>
                <p className="text-sm text-muted-foreground mt-2">Расширенный</p>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white p-6 rounded-xl shadow-lg border-2 border-accent">
                <Icon name="Star" size={40} className="mx-auto mb-4 text-accent" />
                <h3 className="font-bold text-lg mb-2">60 минут</h3>
                <p className="text-3xl font-bold text-accent">2500₽</p>
                <p className="text-sm text-muted-foreground mt-2">Премиум</p>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <Icon name="Users" size={40} className="mx-auto mb-4 text-primary" />
                <h3 className="font-bold text-lg mb-2">Абонемент</h3>
                <p className="text-3xl font-bold text-primary">7000₽</p>
                <p className="text-sm text-muted-foreground mt-2">5 сеансов</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Отзывы наших клиентов</h2>
            <p className="text-xl text-muted-foreground">
              Довольные хвостики и счастливые хозяева — наша главная награда
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((review, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center text-white font-bold">
                      {review.name.charAt(0)}
                    </div>
                    <div>
                      <p className="font-semibold">{review.name}</p>
                      <p className="text-sm text-muted-foreground">{review.pet}</p>
                    </div>
                  </div>
                  <div className="flex gap-1">
                    {[...Array(review.rating)].map((_, i) => (
                      <Icon key={i} name="Star" size={16} className="text-yellow-500 fill-current" />
                    ))}
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground italic">"{review.text}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 to-secondary/10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Свяжитесь с нами</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Готовы подарить вашему питомцу незабываемые ощущения? Запишитесь на консультацию прямо сейчас!
          </p>
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div className="flex items-center justify-center gap-3">
              <Icon name="Phone" size={24} className="text-primary" />
              <div>
                <p className="font-semibold">Телефон</p>
                <p className="text-muted-foreground">+7 (999) 123-45-67</p>
              </div>
            </div>
            <div className="flex items-center justify-center gap-3">
              <Icon name="Mail" size={24} className="text-primary" />
              <div>
                <p className="font-semibold">Email</p>
                <p className="text-muted-foreground">info@dogmassage.ru</p>
              </div>
            </div>
            <div className="flex items-center justify-center gap-3">
              <Icon name="MapPin" size={24} className="text-primary" />
              <div>
                <p className="font-semibold">Адрес</p>
                <p className="text-muted-foreground">ул. Собачья, 15</p>
              </div>
            </div>
          </div>
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3">
            <Icon name="MessageCircle" size={20} className="mr-2" />
            Записаться на сеанс
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-background border-t py-12">
        <div className="container mx-auto px-4 text-center">
          <div className="mb-6">
            <h3 className="text-2xl font-bold mb-2 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              🐕 Массаж головы для собак
            </h3>
            <p className="text-muted-foreground">Профессиональная забота о ваших питомцах</p>
          </div>
          <div className="flex justify-center gap-6 mb-6">
            <Button variant="ghost" size="sm">
              <Icon name="Instagram" size={20} />
            </Button>
            <Button variant="ghost" size="sm">
              <Icon name="Facebook" size={20} />
            </Button>
            <Button variant="ghost" size="sm">
              <Icon name="Twitter" size={20} />
            </Button>
          </div>
          <p className="text-sm text-muted-foreground">
            © 2024 Массаж головы для собак. Все права защищены.
          </p>
        </div>
      </footer>
    </div>
  );
}