<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'vendor/autoload.php';


header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");
header("Content-Type: application/json");

if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
    http_response_code(200);
    exit();
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    echo json_encode(["status" => "error", "message" => "Invalid request method"]);
    exit;
}

$data = json_decode(file_get_contents("php://input"), true);

if (!isset($data['email']) || !isset($data['name']) || !isset($data['projectType'])) {
    echo json_encode(["status" => "error", "message" => "Missing parameters"]);
    exit;
}

$mail = new PHPMailer(true);

try {
    // Configuration du serveur SMTP
    $mail->isSMTP();
    // $mail->isMail();
    $mail->Host = 'mail.glomulser.com'; // Remplacez par votre hôte SMTP
    $mail->SMTPAuth = true;
    $mail->Username = 'devi@franchise-it-tech.com';
    $mail->Password = 'Franchise25@'; 
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;
    $mail->Port = 465;

    $mail->CharSet = 'UTF-8';
    $mail->Encoding = 'base64';

    // Configuration de l'e-mail
    $mail->setFrom($data['email'], $data['name']);
    $mail->addAddress("devi@franchise-it-tech.com");
    if (isset($data['cc'])) {
        $mail->addCC($data['cc']);
    }
    if (isset($data['bcc'])) {
        $mail->addBCC($data['bcc']);
    }
    if (isset($data['reply_to'])) {
        $mail->addReplyTo($data['reply_to']);
    }
    // Charger le template HTML
    $template = file_get_contents('email_template.html');

    // Remplacer les variables dynamiques
    $template = str_replace('{{name}}', $data['name'], $template);
    $template = str_replace('{{email}}', $data['email'], $template);
    $template = str_replace('{{serviceDetails}}', $data['serviceDetails'], $template);
    $template = str_replace('{{phone}}', $data['phone'], $template);
    $template = str_replace('{{currency}}', $data['currency'], $template);
    $template = str_replace('{{customTimeline}}', $data['customTimeline'], $template);
    $template = str_replace('{{timeline}}', $data['timeline'], $template);
    $template = str_replace('{{budget}}', $data['budget'], $template);
    $template = str_replace('{{description}}', $data['description'], $template);
    $template = str_replace('{{company}}', $data['company'], $template);

    
    $mail->isHTML(true);
    $mail->Subject = "Nouveau Devis";
    $mail->Body    = $template;
    $mail->AltBody = "merci de nous avoir contactés.";

    // Envoi de l'e-mail
    $mail->send();
    echo json_encode(["status" => "success", "message" => "Email sent successfully{$mail->ErrorInfo}"]);
} catch (Exception $e) {
    echo json_encode(["status" => "error", "message" => "{$e} :Email could not be sent. Mailer Error: {$mail->ErrorInfo}"]);
}