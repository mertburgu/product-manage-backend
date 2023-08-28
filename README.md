# Ürün Yönetimi Backend

Bu proje, ürün yönetimi uygulamasının backend tarafını içerir. Express.js, MongoDB ve diğer teknolojiler kullanılmıştır.

## Başlangıç

Aşağıdaki adımları takip ederek projeyi yerel makinenizde çalıştırabilirsiniz.

### Gereksinimler

- Node.js
- npm (Node Package Manager)
- MongoDB (yerel veya uzak bir veritabanı sunucusu)

### Kullanım
Uygulama başlatıldıktan sonra, backend sunucusu localhost:3000 adresinde çalışacaktır. Aşağıda projenin temel kullanım örneklerini bulabilirsiniz:

### Kullanılanlar

- Express.js
- MongoDB
- bcryptjs
- cors
- jsonwebtoken
- mongoose

#### Kullanıcı Kaydı

URL: /register
Method: POST
Açıklama: Kullanıcı kaydı işlemi.

##### Örnek İstek:

POST /register
Content-Type: application/json

{
  "username": "kullanici123",
  "password": "sifre123",
  "email": "ornek@example.com"
}

#### Kullanıcı Girişi
URL: /login
Method: POST
Açıklama: Kullanıcı girişi işlemi.

##### Örnek İstek:

POST /login
Content-Type: application/json

{
  "emailOrUsername": "kullanici123",
  "password": "sifre123"
}

#### Ürünleri Listele
URL: /products
Method: GET
Açıklama: Tüm ürünleri listeler.

##### Ürün Detayı
URL: /products/:id
Method: GET
Açıklama: Belirtilen ID'ye sahip ürünün detayını getirir.
Daha fazla endpoint ve kullanım örneği için lütfen projenin kaynak kodlarını inceleyin.

# Node.js App

## Base Url:
localhost:3000/api/

### Case:

#### Ürün Yönetimi;

Bir firmanın ürünlerinin listesinin tutulduğu ve bu ürünlerin giriş
çıkışlarının yapılıp listelendiği projenin arayüz ve backendinin hazırlanması


### Şemalar:


#### Kullanıcılar;

Adı           : string

Kullanıcı Adı : string

Şifre         : string

Email         : string


#### Ürünler;

Ürün Adı            : string

Ürün Açıklaması     : string

Ürün Kodu           : string

Stoktaki Ürün Adedi : number


#### Ürün Hareketleri;

Hareket Açıklaması  : string

Giriş/Çıkış Adedi   : number


### Koşullar:

· Programlama dili olarak backend tarafında Node.js (Express ya da
Koa Framework tercih edilmeli), Database olarak MongoDB,
Frontend tarafında da React.js tercih edilmelidir. Harici çalışmalar
kabul edilmeyecektir.

· Çalışmalarda değişken ve diğer isimlendirmeler İngilizce
yapılmalıdır.

· Sisteme giriş için Login ekranı olmalı ve Başarılı bir login
işleminden sonra sayfaya giriş yapılmalı. Hem backend hem de
frontend de auth işlemleri olmalıdır.

· Ürünlerde ekleme,listeleme,güncelleme ve silme işlemleri
yapılabilmelidir.

· Ürünlerin detay sayfasında kayıt edilen ürün bilgileri bir view
olarak gösterilmeli ve ürünlerin giriş çıkış hareketleri yapılabilmeli.
Her yapılan giriş çıkış işleminde ürünlerin bulunduğu tablodaki
stoktaki ürün adeti alanı arttırılmalı ya da eksiltilmelidir. Ayrıca bu
yapılan giriş çıkış işlemi liste olarak sunulmalıdır.Giriş/Çıkış
işlemlerinin silinmesine ya da güncellenmesine gerek yoktur.
