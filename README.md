# KitaplikProject
KITAPLIK UYGULAMASI:
•	Kullanıcıların okudukları kitaplar hakkında paylaşım yapabilecekleri bir sosyal medya uygulaması yapmak.
•	Uygulama kapsamında hesap oluşturma ve giriş yapabilme, okudukları kitaplar hakkında paylaşım yapabilme, kendi profillerine favori kitaplarını ekleme gibi özelliklerin de olması beklenmektedir.
•	Kullanıcılar paylaştıkları gönderiye fotoğraf da ekleyebileceklerdir. Başka kullanıcıların gönderilerini beğenme, başka kullanıcıların profillerini görüntüleyebilme, o profildeki favorilenmiş kitapları favorilere ekleyebilme gibi özellikler de mevcut olmalıdır. Ek olarak favori kitaplar eklenirken kitap ve yazar adı, türü de sisteme girilmelidir.
•	Uygulamada arama seçeceği olmalı ve kullanıcıların profillerine eklenmiş tüm kitaplar içinde arama yapıp eşleşen kitaplar gösterilmelidir. Ek olarak tür bazlı arama seçeceği de dahil edilebilir.
•	Alt yapı olarak Firebase alt yapısı tercih edilebilir.


PROJE ADI 
•	KitaplıkProject
PROJE İÇERIĞI
•	Kullanıcıların okudukları kitapları paylaşacağı ve favorilerine kitap ekleyeceği sosyal paylaşım uygulaması.























GEREKSINIMLER
•	Hesap oluşturma
•	Giriş yapma
•	Kitap paylaşma
•	Kitap Favori ekleme
•	Profile ekranı



EK GEREKSINIMLER
•	Kitap Arama
•	Türe göre arama
•	Favorilerde Yazar adı ve türü olacak




AKTÖRLER VE AKSIYONLAR
Kullanıcı
•	Kayıt olma
•	Kitap Paylaşma
•	Profillere Kontrolü

Sistem
•	Kitap eşleşme



ADIM ADIM GÖSTERIM

1.	HESAP OLUŞTURMA:
Tanım : Kullanıcı Hesap oluşturma ekranından hesap oluşturuyor.
Olumlu Durum:
•	Kullanıcı hesap oluşturma ekranına girer
•	Kullanıcı kullanıcı adı doldurur
•	Kullanıcı parola doldurur
•	Kullanıcı tekrar parola doldurur
•	Kayıt Ol Butonuna basılır
•	Veritabanı veri yollanır
•	Veritabanı kontrol edilir
•	Kullanıcıya hoşgeldin mesajı gönderilir
Olumsuz Durum: parolalar eşleşmedi 
•	Kullanıcı hesap oluşturma ekranına girer
•	Kullanıcı kullanıcı adı doldurur
•	Kullanıcı parola doldurur
•	Kullanıcı tekrar parola doldurur
•	Kayıt Ol Butonuna basılır
•	Veritabanı veri yollanır
•	Veritabanı kontrol edilir
•	Kullanıcıya parolalar eşlemedi mesajı gönder
Olumsuz Durum: kullanıcı mevcut
•	Kullanıcı hesap oluşturma ekranına girer
•	Kullanıcı kullanıcı adı doldurur
•	Kullanıcı parola doldurur
•	Kullanıcı tekrar parola doldurur
•	Kayıt Ol Butonuna basılır
•	Veritabanı veri yollanır
•	Veritabanı kontrol edilir
•	Kullanıcıya kullanıcı mevcut mesajı gönde





2.	KITAP PAYLAŞMA:
Tanım : Kullanıcı Kitap paylaşma
Olumlu Durum:
•	Kitap paylaşma Ekranına girer
•	Fotoğraf secilir
•	İsmi yazılır
•	Yazarı Yazılır
•	Türü Seçilir
•	Paylaş butonuna basılır
•	Veritabanına veri yollanır
•	Kitap veri tabanına kaydedilir
•	Ana sayfaya yönlendirilir
Olumsuz Durum: veri tabanı hatası
•	Kitap paylaşma Ekranına girer
•	Fotoğraf secilir
•	İsmi yazılır
•	Yazarı Yazılır
•	Türü Seçilir
•	Paylaş butonuna basılır
•	Veritabanı veri yollanır
•	Hata mesajı gönderilir
