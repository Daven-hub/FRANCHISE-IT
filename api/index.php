<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");

class APIClient {
    private $data;
    
    public function __construct() {
        // Données prédéfinies simulant une base de données
        $this->data = [
            ["id" => 1, "name" => "Produit A", "price" => 100],
            ["id" => 2, "name" => "Produit B", "price" => 150],
            ["id" => 3, "name" => "Produit C", "price" => 200]
        ];
    }

    private function response($data, $status = 200) {
        header("Content-Type: application/json");
        http_response_code($status);
        echo json_encode($data);
        exit;
    }

    public function get() {
        $this->response($this->data);
    }
}

// Exemple d'utilisation
$api = new APIClient();
$method = $_SERVER['REQUEST_METHOD'];

if ($method === 'GET') {
    $api->get();
} else {
    http_response_code(405);
    echo json_encode(["error" => "Method Not Allowed"]);
}

?>