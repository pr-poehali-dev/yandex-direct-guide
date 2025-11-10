import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const glossaryTerms = [
    { term: 'CTR', definition: 'Click-Through Rate — показатель кликабельности объявления, отношение числа кликов к показам', category: 'Метрики' },
    { term: 'CPC', definition: 'Cost Per Click — цена за клик, средняя стоимость одного клика по объявлению', category: 'Метрики' },
    { term: 'Конверсия', definition: 'Целевое действие пользователя на сайте (покупка, заявка, регистрация)', category: 'Метрики' },
    { term: 'Ключевые слова', definition: 'Поисковые запросы, по которым показываются рекламные объявления', category: 'Основы' },
    { term: 'Минус-слова', definition: 'Слова, по которым объявления показываться не будут', category: 'Основы' },
    { term: 'Ставка', definition: 'Максимальная цена, которую вы готовы заплатить за клик или показ', category: 'Основы' },
    { term: 'Показатель качества', definition: 'Оценка релевантности объявления, влияющая на позицию и стоимость', category: 'Оптимизация' },
    { term: 'A/B тестирование', definition: 'Сравнение двух вариантов объявлений для определения более эффективного', category: 'Оптимизация' },
  ];

  const filteredTerms = glossaryTerms.filter(item => 
    item.term.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.definition.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b sticky top-0 bg-white/95 backdrop-blur-sm z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="bg-accent rounded-lg p-2">
                <Icon name="BookOpen" className="w-6 h-6 text-primary" />
              </div>
              <h1 className="text-2xl font-bold text-primary" style={{ fontFamily: 'Golos Text, sans-serif' }}>
                Гайдбук Яндекс Директ
              </h1>
            </div>
            <nav className="hidden md:flex gap-6">
              <a href="#basics" className="text-sm font-medium hover:text-primary transition-colors">Основы</a>
              <a href="#optimization" className="text-sm font-medium hover:text-primary transition-colors">Оптимизация</a>
              <a href="#glossary" className="text-sm font-medium hover:text-primary transition-colors">Словарь</a>
              <a href="#analytics" className="text-sm font-medium hover:text-primary transition-colors">Аналитика</a>
            </nav>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-6 py-12">
        <section className="mb-16">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-foreground" style={{ fontFamily: 'Golos Text, sans-serif' }}>
              Полное руководство по контекстной рекламе
            </h2>
            <p className="text-lg text-muted-foreground">
              Пошаговые инструкции, практические советы и лучшие практики для эффективной работы с Яндекс Директ
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer group">
              <CardHeader>
                <div className="mb-3 bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Icon name="Rocket" className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>Быстрый старт</CardTitle>
                <CardDescription>Создайте первую кампанию за 15 минут</CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-lg transition-shadow cursor-pointer group">
              <CardHeader>
                <div className="mb-3 bg-accent/20 w-12 h-12 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Icon name="TrendingUp" className="w-6 h-6 text-accent-foreground" />
                </div>
                <CardTitle>Оптимизация</CardTitle>
                <CardDescription>Увеличьте эффективность рекламы</CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-lg transition-shadow cursor-pointer group">
              <CardHeader>
                <div className="mb-3 bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Icon name="BarChart3" className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>Аналитика</CardTitle>
                <CardDescription>Анализируйте результаты и ROI</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </section>

        <Tabs defaultValue="basics" className="space-y-8">
          <TabsList className="grid w-full grid-cols-4 max-w-2xl mx-auto">
            <TabsTrigger value="basics">Основы</TabsTrigger>
            <TabsTrigger value="optimization">Оптимизация</TabsTrigger>
            <TabsTrigger value="glossary">Словарь</TabsTrigger>
            <TabsTrigger value="faq">FAQ</TabsTrigger>
          </TabsList>

          <TabsContent value="basics" id="basics">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl" style={{ fontFamily: 'Golos Text, sans-serif' }}>
                  Основы работы с Яндекс Директ
                </CardTitle>
                <CardDescription>Пошаговое руководство для начинающих специалистов</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                      1
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Регистрация и настройка аккаунта</h3>
                      <p className="text-muted-foreground mb-3">
                        Создайте аккаунт в Яндекс Директ, привяжите платёжные данные и настройте уведомления. 
                        Подключите Яндекс Метрику для отслеживания конверсий.
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="outline">Яндекс ID</Badge>
                        <Badge variant="outline">Метрика</Badge>
                        <Badge variant="outline">Бюджет</Badge>
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                      2
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Создание рекламной кампании</h3>
                      <p className="text-muted-foreground mb-3">
                        Выберите тип кампании (поиск или РСЯ), определите целевую аудиторию, установите дневной бюджет 
                        и стратегию показов. Настройте географию и расписание показов.
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <Badge>Поиск</Badge>
                        <Badge>РСЯ</Badge>
                        <Badge variant="outline">География</Badge>
                        <Badge variant="outline">Бюджет</Badge>
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                      3
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Подбор ключевых слов</h3>
                      <p className="text-muted-foreground mb-3">
                        Используйте Вордстат для подбора релевантных запросов. Группируйте ключевые слова по тематике. 
                        Добавьте минус-слова для фильтрации нецелевого трафика.
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="secondary">Вордстат</Badge>
                        <Badge variant="outline">Минус-слова</Badge>
                        <Badge variant="outline">Группировка</Badge>
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                      4
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Создание объявлений</h3>
                      <p className="text-muted-foreground mb-3">
                        Напишите привлекательные заголовки (до 56 символов) и описания. Добавьте быстрые ссылки, 
                        уточнения и виртуальную визитку. Используйте УТП в тексте объявления.
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="outline">Заголовок</Badge>
                        <Badge variant="outline">УТП</Badge>
                        <Badge variant="outline">Быстрые ссылки</Badge>
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                      5
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Запуск и мониторинг</h3>
                      <p className="text-muted-foreground mb-3">
                        Проверьте все настройки перед запуском. Отправьте кампанию на модерацию. 
                        После одобрения отслеживайте показатели эффективности в первые 3-7 дней.
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="secondary">Модерация</Badge>
                        <Badge variant="outline">Мониторинг</Badge>
                        <Badge variant="outline">Корректировки</Badge>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="optimization" id="optimization">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl" style={{ fontFamily: 'Golos Text, sans-serif' }}>
                  Оптимизация рекламных кампаний
                </CardTitle>
                <CardDescription>Практические рекомендации по улучшению показателей</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <Card className="bg-muted/50">
                    <CardHeader>
                      <div className="flex items-start gap-3">
                        <Icon name="Target" className="w-5 h-5 text-primary mt-1" />
                        <div>
                          <CardTitle className="text-lg">Повышение CTR</CardTitle>
                          <CardDescription className="mt-2">
                            • Используйте цифры в заголовках<br/>
                            • Добавьте призыв к действию<br/>
                            • Тестируйте разные УТП<br/>
                            • Используйте расширения объявлений<br/>
                            • Добавьте эмоциональные триггеры
                          </CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                  </Card>

                  <Card className="bg-muted/50">
                    <CardHeader>
                      <div className="flex items-start gap-3">
                        <Icon name="DollarSign" className="w-5 h-5 text-primary mt-1" />
                        <div>
                          <CardTitle className="text-lg">Снижение CPC</CardTitle>
                          <CardDescription className="mt-2">
                            • Повышайте показатель качества<br/>
                            • Используйте автостратегии<br/>
                            • Добавляйте минус-слова<br/>
                            • Настройте корректировки ставок<br/>
                            • Оптимизируйте время показов
                          </CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                  </Card>

                  <Card className="bg-muted/50">
                    <CardHeader>
                      <div className="flex items-start gap-3">
                        <Icon name="Users" className="w-5 h-5 text-primary mt-1" />
                        <div>
                          <CardTitle className="text-lg">Работа с аудиториями</CardTitle>
                          <CardDescription className="mt-2">
                            • Создайте look-alike аудитории<br/>
                            • Настройте ретаргетинг<br/>
                            • Исключите конвертировавших<br/>
                            • Сегментируйте по поведению<br/>
                            • Используйте пиксель Метрики
                          </CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                  </Card>

                  <Card className="bg-muted/50">
                    <CardHeader>
                      <div className="flex items-start gap-3">
                        <Icon name="Zap" className="w-5 h-5 text-primary mt-1" />
                        <div>
                          <CardTitle className="text-lg">A/B тестирование</CardTitle>
                          <CardDescription className="mt-2">
                            • Тестируйте заголовки<br/>
                            • Меняйте призывы к действию<br/>
                            • Проверяйте разные посадочные<br/>
                            • Экспериментируйте с форматами<br/>
                            • Анализируйте статистику
                          </CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                  </Card>
                </div>

                <Card className="bg-primary/5 border-primary/20">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Icon name="Lightbulb" className="w-5 h-5 text-accent-foreground" />
                      Совет эксперта
                    </CardTitle>
                    <CardDescription className="text-base mt-2">
                      Оптимизацию следует проводить не чаще 1 раза в 3-5 дней, чтобы накопилась достаточная статистика. 
                      Меняйте не более 2-3 параметров одновременно для точного определения влияния изменений.
                    </CardDescription>
                  </CardHeader>
                </Card>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="glossary" id="glossary">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl" style={{ fontFamily: 'Golos Text, sans-serif' }}>
                  Словарь терминов
                </CardTitle>
                <CardDescription>Основные понятия контекстной рекламы</CardDescription>
                <div className="mt-4">
                  <Input
                    placeholder="Поиск по терминам..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="max-w-md"
                  />
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {filteredTerms.map((item, index) => (
                    <div key={index} className="p-4 rounded-lg border bg-card hover:bg-muted/50 transition-colors">
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <h3 className="font-semibold text-lg">{item.term}</h3>
                            <Badge variant="outline" className="text-xs">{item.category}</Badge>
                          </div>
                          <p className="text-muted-foreground">{item.definition}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                {filteredTerms.length === 0 && (
                  <div className="text-center py-12 text-muted-foreground">
                    <Icon name="Search" className="w-12 h-12 mx-auto mb-3 opacity-50" />
                    <p>Термины не найдены</p>
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="faq">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl" style={{ fontFamily: 'Golos Text, sans-serif' }}>
                  Часто задаваемые вопросы
                </CardTitle>
                <CardDescription>Ответы на популярные вопросы по работе с Директ</CardDescription>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1">
                    <AccordionTrigger className="text-left">
                      Какой минимальный бюджет нужен для старта рекламы?
                    </AccordionTrigger>
                    <AccordionContent>
                      Минимальный бюджет зависит от тематики и региона. Для начала рекомендуется от 10 000 ₽ в месяц 
                      для тестирования. В конкурентных нишах может потребоваться от 30 000 ₽. Начните с небольших 
                      дневных бюджетов (300-500 ₽), чтобы собрать статистику без больших затрат.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-2">
                    <AccordionTrigger className="text-left">
                      Как быстро объявления проходят модерацию?
                    </AccordionTrigger>
                    <AccordionContent>
                      Стандартная модерация занимает до 3 рабочих дней, но обычно объявления проверяются в течение 
                      нескольких часов. В пиковые периоды (понедельник, праздники) процесс может занять до 5 дней. 
                      Проверьте требования модерации заранее, чтобы избежать отклонения.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-3">
                    <AccordionTrigger className="text-left">
                      Чем отличается поисковая реклама от РСЯ?
                    </AccordionTrigger>
                    <AccordionContent>
                      Поисковая реклама показывается в результатах поиска Яндекса пользователям с активным намерением. 
                      РСЯ (Рекламная Сеть Яндекса) показывается на партнёрских сайтах и работает на охват и ретаргетинг. 
                      Поиск обычно дороже, но даёт более целевой трафик. РСЯ подходит для повышения узнаваемости бренда.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-4">
                    <AccordionTrigger className="text-left">
                      Как правильно использовать минус-слова?
                    </AccordionTrigger>
                    <AccordionContent>
                      Минус-слова исключают показы по нерелевантным запросам. Добавляйте их на уровне кампании 
                      (общие минус-слова) и группы объявлений (специфичные). Регулярно анализируйте поисковые запросы 
                      и добавляйте неподходящие в минус-слова. Используйте операторы: "слово" (точно), 
                      [слово] (с предлогами), +слово (фиксация формы).
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-5">
                    <AccordionTrigger className="text-left">
                      Какую стратегию выбрать для новой кампании?
                    </AccordionTrigger>
                    <AccordionContent>
                      Для новых кампаний рекомендуется "Ручное управление ставками" или "Максимум кликов" 
                      с ограничением средней цены клика. Это позволит собрать статистику. После 20-30 конверсий 
                      переходите на стратегии оптимизации конверсий. "Недельный бюджет" подходит для стабильного 
                      расхода средств.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-6">
                    <AccordionTrigger className="text-left">
                      Как связать Директ с Яндекс Метрикой?
                    </AccordionTrigger>
                    <AccordionContent>
                      В настройках кампании в разделе "Метрика и цели" добавьте номер счётчика Метрики. 
                      Убедитесь, что на сайте установлен код счётчика. Настройте цели в Метрике 
                      (посещение страниц, клики, формы). После связки данные о конверсиях будут передаваться 
                      в Директ для оптимизации.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        <section className="mt-12" id="analytics">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl" style={{ fontFamily: 'Golos Text, sans-serif' }}>
                Аналитика и отчётность
              </CardTitle>
              <CardDescription>Ключевые метрики для оценки эффективности рекламы</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="p-6 rounded-lg bg-primary/5 border border-primary/20">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-muted-foreground">Показы</span>
                    <Icon name="Eye" className="w-4 h-4 text-primary" />
                  </div>
                  <div className="text-3xl font-bold mb-1">124,580</div>
                  <div className="text-xs text-green-600 flex items-center gap-1">
                    <Icon name="TrendingUp" className="w-3 h-3" />
                    +12% за неделю
                  </div>
                </div>

                <div className="p-6 rounded-lg bg-accent/10 border border-accent/30">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-muted-foreground">CTR</span>
                    <Icon name="MousePointer" className="w-4 h-4 text-accent-foreground" />
                  </div>
                  <div className="text-3xl font-bold mb-1">4.8%</div>
                  <div className="text-xs text-green-600 flex items-center gap-1">
                    <Icon name="TrendingUp" className="w-3 h-3" />
                    +0.3% за неделю
                  </div>
                </div>

                <div className="p-6 rounded-lg bg-primary/5 border border-primary/20">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-muted-foreground">CPC</span>
                    <Icon name="DollarSign" className="w-4 h-4 text-primary" />
                  </div>
                  <div className="text-3xl font-bold mb-1">42 ₽</div>
                  <div className="text-xs text-green-600 flex items-center gap-1">
                    <Icon name="TrendingDown" className="w-3 h-3" />
                    -8% за неделю
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="font-semibold text-lg">Рекомендуемые метрики для отслеживания</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="flex gap-3 p-4 rounded-lg border">
                    <Icon name="CheckCircle2" className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="font-medium mb-1">Показатель качества</div>
                      <p className="text-sm text-muted-foreground">
                        Влияет на позицию и цену клика. Оптимальное значение — выше 7
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-3 p-4 rounded-lg border">
                    <Icon name="CheckCircle2" className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="font-medium mb-1">Коэффициент конверсии</div>
                      <p className="text-sm text-muted-foreground">
                        Процент посетителей, совершивших целевое действие
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-3 p-4 rounded-lg border">
                    <Icon name="CheckCircle2" className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="font-medium mb-1">ROI (Return on Investment)</div>
                      <p className="text-sm text-muted-foreground">
                        Возврат инвестиций — прибыль от рекламы относительно затрат
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-3 p-4 rounded-lg border">
                    <Icon name="CheckCircle2" className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="font-medium mb-1">Средняя позиция показа</div>
                      <p className="text-sm text-muted-foreground">
                        Отражает видимость объявлений в результатах поиска
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      </main>

      <footer className="border-t mt-16 py-8 bg-muted/30">
        <div className="container mx-auto px-6 text-center text-sm text-muted-foreground">
          <p>© 2024 Гайдбук Яндекс Директ. Экспертное руководство по контекстной рекламе</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
